import React from 'react'
import MovieCard from './MovieCard'
import {MoviesContext} from '../../context/movies'
import {Loading} from '../Loading/index'
import {ListStyle} from './styles/index'


export default function MovieList() {
const {movies, query} = React.useContext(MoviesContext);

console.log(movies);
console.log(query.length);

if (movies.length === 0 && query.length === 0) return <Loading/>

if(query.length === 20) return (
    <>
       <ListStyle>
        {query.map(item => {
            return <MovieCard key={item.id} {...item}/>
        })}
        </ListStyle>
    </>
    )

else return (
    <>
       <ListStyle>
        {movies.map(item => {
            return <MovieCard key={item.id} {...item}/>
        })}
        </ListStyle>
    </>
    )
}
