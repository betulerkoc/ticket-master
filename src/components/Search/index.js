import React from 'react'
import {SearchComp} from './styles/index'
import {MoviesContext} from '../../context/movies'

export default function Search() {


    return (
        <SearchComp>
              <input name="userInput" value=" " type="text"></input>
              <button>Search</button>
        </SearchComp>
    )
}