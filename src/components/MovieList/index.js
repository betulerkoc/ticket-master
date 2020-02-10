import React from 'react'
import MovieCard from './MovieCard'
import {MoviesContext} from '../../context/movies'
import {Loading} from '../Loading/index'
import {ListStyle} from './styles/index'
import Pagination from '../Pagination/index'
import PropTypes from 'prop-types';


export default function MovieList() {
const {movies, query} = React.useContext(MoviesContext);

console.log( movies);
console.log( query);

if (movies.length === 0 && query.length === 0) return <Loading/>

return (
    <>
       <ListStyle>
        {movies.map(item => {
            console.log(item.id);
            return <MovieCard key={item.id} 
                              id={item.id} 
                              movieName = {item.name} 
                              type = {item.type}
                              dates = {item.dates.start.localDate} 
                              images={item.images[0].url} 
                             />
        })}
        </ListStyle>
        <Pagination/>
    </>
    )
}

MovieCard.propTypes = {
    id:PropTypes.string,
    movieName:PropTypes.string,
    images:PropTypes.string,
    category:PropTypes.string,
    genre:PropTypes.string
 }
 
 MovieCard.defaultProps = {
    movieName:"Unknown Movie",
    image:"https://image.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg",
    category:"Unknown category",
    genre:"Unknown genre",
 }
 