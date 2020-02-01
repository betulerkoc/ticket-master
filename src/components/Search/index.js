import React from 'react'
import {SearchComp} from './styles/index'
import {MoviesContext} from '../../context/movies'
import MovieProvider from '../../context/movies'


export default function Search() {

    const {query, onInputChange, onSubmitHandler} = React.useContext(MoviesContext);

    return (
        <SearchComp value={query}>
            <form onSubmit={onSubmitHandler}>
              <input 
                name="userInput"
                onChange={onInputChange}          
                type="search"
              ></input>
              <button type="submit">Search</button>
            </form>
        </SearchComp>
    )
}