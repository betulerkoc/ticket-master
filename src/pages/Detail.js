import React from 'react'
import {Loading} from "../components/Loading/index"
import {useParams} from "react-router-dom"
import {MoviesContext} from "../context/movies"



export default function Detail() {
        const{id} = useParams();
        const {movies} = React.useContext(MoviesContext);
        const m = movies.find(item => item.id == id);
        if (movies.length === 0) {
                return <Loading/>
        }

        return (
            <div>
                    <h1>Detail: </h1>
                    <a href="#"><img src={m.image} alt="" style={{height: "150px"}}/></a>
                    <h4>Name: {m.name}</h4>
                    <h6>Description: {m.description}</h6>
                    <h6>Age: {m.age}</h6>
                    <h6>Breed: {m.breed}</h6>
            </div>
        )
}
