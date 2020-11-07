import React from 'react'
import {Loading} from "../components/Loading/index"
import {useParams} from "react-router-dom"
import {MoviesContext} from "../context/movies"
import {ListStyle} from '../components/MovieList/styles/index';



export default function Detail() {
        const{id} = useParams();
        const {movies} = React.useContext(MoviesContext);
        const m = movies.find(item => item.id === id);
        if (movies.length === 0) {
                return <Loading/>
        }

        return (
        <>
            <ListStyle>
                <a href="/"><img src={m.images[0].url} alt="" style={{height: "150px"}}/></a>    
                <p>Detail:{m.info} </p>
                <p>Note:{m.pleaseNote}</p>
            </ListStyle>
        </>
        )
}
