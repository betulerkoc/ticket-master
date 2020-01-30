import React from 'react'
import {getMovies} from "../constants";


export const MoviesContext = React.createContext({});

export default function MovieProvider({children}) {
    const [movies, setMovies] = React.useState([]);
    //const [searchs, setSearch] = React.useState("")

    // const updateFilters = e => {
    //     const filter = e.target.name;
    //     const value = e.target.value;
    //     setSearch({...searchs, [filter]: value});
    // }


    React.useEffect(() => {
        getMovies().then((data) => {
            setMovies(data._embedded.events);
        })

    }, []);
    return (
        <MoviesContext.Provider value={{movies}}>
            {children}
        </MoviesContext.Provider>
    )
}
