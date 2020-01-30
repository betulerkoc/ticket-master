import React from 'react'
import {getPets} from "../constants";


export const MoviesContext = React.createContext({});

export default function MovieProvider({children}) {
    const [movies, setMovies] = React.useState([]);
    const [searchs, setSearch] = React.useState("")

    // const updateFilters = e => {
    //     const filter = e.target.name;
    //     const value = e.target.value;
    //     setSearch({...searchs, [filter]: value});
    // }


    React.useEffect(() => {
        getPets().then((data) => {
            setMovies(data);
        })

    }, []);
    return (
        <MoviesContext.Provider value={{movies, searchs}}>
            {children}
        </MoviesContext.Provider>
    )
}
