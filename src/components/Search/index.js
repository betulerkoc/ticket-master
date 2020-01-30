import React from 'react'
import {SearchComp} from './styles/index'


export default function Search() {


    return (
        <SearchComp>
              <input name="userInput" value=" " type="text"></input>
              <button>Search</button>
        </SearchComp>
    )
}