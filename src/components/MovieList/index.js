// export const MovieList = () => {
//     <div>test</div>
// };

import React from 'react'
import MovieCard from './MovieCard'
import {MoviesContext} from '../../context/movies'
import {Loading} from '../Loading/index'
import {ListStyle} from './styles/index'


export default function MovieList() {
const {movies} = React.useContext(MoviesContext);

console.log(movies);
if (movies.length === 0) return <Loading/>

return (
       <ListStyle>
        {movies.map(item => {
            return <MovieCard key={item.id} {...item}/>
        })}
        </ListStyle>
    )
}
