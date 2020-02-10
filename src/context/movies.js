import React from 'react'

export const MoviesContext = React.createContext({});

export default function MovieProvider({children}) {
    const [movies, setMovies] = React.useState([]);
    const [totalPage, setTotalPage] = React.useState(0);
    const [query, setQuery] = React.useState({
        pageSize: 30,
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
            setTotalPage(data.page.totalPages);
          })
    };

    //console.log(totalPage);

    const onInputChange = (e) => {
        setQuery({...query, keyword: e.target.value});
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        getSearchedMovies();
        console.log(movies);
    };

    const onPageNumberChange = (pageNumber) => {
        setQuery({...query, pageNumber});
        getSearchedMovies();
    };

    //console.log(query.pageNumber);

    return (
        <MoviesContext.Provider value={{movies, query, onInputChange, onPageNumberChange, onSubmitHandler,totalPage}}>
            {children}
        </MoviesContext.Provider>
    )
}
