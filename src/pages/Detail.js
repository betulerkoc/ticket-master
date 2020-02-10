import React from 'react'
import PropTypes from 'prop-type'
import Button from '../components/Button/index'
import {Loading} from "../components/Loading/index"
import {useParams} from "react-router-dom"
import {MoviesContext} from "../context/movies"
import {ListStyle} from '../components/MovieList/styles/index';
import {Link} from 'react-router-dom';



export default function Detail() {
        const{id} = useParams();
        const {movies} = React.useContext(MoviesContext);
        const m = movies.find(item => item.id == id);
        if (movies.length === 0) {
                return <Loading/>
        }

        return (
        <>
            <ListStyle>
                <a href="#"><img src={m.images[0].url} alt="" style={{height: "150px"}}/></a>    
                <p>Detail:{m.info} </p>
                <p>Note:{m.pleaseNote}</p>
            </ListStyle>
        </>
        )
}
