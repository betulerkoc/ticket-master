import React from 'react'
import Error from '../pages/Error'


export const MoviesContext = React.createContext({});

export default function MovieProvider({children}) {
    const [movies, setMovies] = React.useState([]);
    const [query, setQuery] = React.useState({
        pageSize: 10,
        pageNumber: 0
    });

    const rootApiURL = "http://app.ticketmaster.com/discovery/v2/events.json?&";
    const apiKey = "apikey=6VZ4GKibC9XVGHFYqTMof7So3DS06y5Y";
    
    const getSearchedMovies = () => {
        let result = [];
        return fetch(rootApiURL + apiKey +`&keyword=${query.keyword}&size=${query.pageSize}&page=${query.pageNumber}`)
        .then((resp) => resp.json()).then((data) => {
            console.log(data);
            if(data._embedded && data._embedded.events) {
                result = data._embedded.events;
            }
            setMovies(result);

          })
    };

    React.useEffect(() => {
        getSearchedMovies();
    }, []);

    const onInputChange = (e) => {
        setQuery({...query, keyword: e.target.value});
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        getSearchedMovies();
        console.log(query);
    };

    const onPageSizeChange = (pageSize) => {
        setQuery({...query, pageSize});
    };

    const onPageNumberChange = (pageNumber) => {
        setQuery({...query, pageNumber});
        getSearchedMovies();
    };

    return (
        <MoviesContext.Provider value={{movies,query, onInputChange, onPageNumberChange, onPageSizeChange, onSubmitHandler}}>
            {children}
        </MoviesContext.Provider>
    )
}
