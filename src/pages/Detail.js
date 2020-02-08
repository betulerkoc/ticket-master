import React from 'react'
import {Loading} from "../components/Loading/index"
import {useParams} from "react-router-dom"
import {MoviesContext} from "../context/movies"
import {BoxStyle} from '../components/MovieList/styles/index';
import Navbar from '../components/Navbar/index'



export default function Detail() {
        const{id} = useParams();
        const {movies} = React.useContext(MoviesContext);
        const m = movies.find(item => item.id == id);
        if (movies.length === 0) {
                return <Loading/>
        }

        return (
        <>
        <Navbar/>
            <BoxStyle>
                    <h1>Detail: </h1>
                    <a href="#"><img src={m.images[0].url} alt="" style={{height: "150px"}}/></a>
                    <h4>Name: {m.name}</h4>
{/*                     <h6>Category: {m._embedded.categories[0].name}</h6> */}
            </BoxStyle>
        </>
        )
}
