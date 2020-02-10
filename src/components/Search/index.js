import React from 'react'
import {SearchComp} from './styles/index'
import {MoviesContext} from '../../context/movies'
import Button from '../Button/index'


export default function Search() {

    const {query, onInputChange, onSubmitHandler} = React.useContext(MoviesContext);

    return (
         <SearchComp value={query.keyValue}>
            <form onSubmit={onSubmitHandler} className="search">
              <input 
                name="userInput"
                onChange={onInputChange}          
                type="search"
                id="search-input"
              ></input>
              <Button type="submit" name="Search"></Button>
            </form>
         </SearchComp>
    )
}