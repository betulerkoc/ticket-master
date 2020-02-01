import React from 'react'

export const MoviesContext = React.createContext({});

export default function MovieProvider({children}) {
    const [movies, setMovies] = React.useState([]);
    const [query, setQuery] = React.useState([]);

    const rootApiURL = "http://app.ticketmaster.com/discovery/v2/events.json?&";
    const apiKey = "apikey=6VZ4GKibC9XVGHFYqTMof7So3DS06y5Y";
    const getMovies = () => {
    return fetch(rootApiURL + apiKey)
    .then((resp) => resp.json())
}
    React.useEffect(() => {
        getMovies().then((data) => {
            setMovies(data._embedded.events);
        })
    }, []);

    const onInputChange = (e) => {
        setQuery(e.target.value);
    };

    const getSearchedMovies = () => {
        return fetch(rootApiURL + apiKey +`&keyword=${query}`)
        .then((resp) => resp.json()).then((data) => {
              setQuery(data._embedded.events);
          })
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        getSearchedMovies();
        console.log(query);
    };

    return (
        <MoviesContext.Provider value={{movies, query, onInputChange, onSubmitHandler}}>
            {children}
        </MoviesContext.Provider>
    )
}
