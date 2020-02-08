import React from 'react'
import {BoxStyle, StyledLink} from './styles/index'
import Button from '../Button/index'

export default function MovieCard({name, id, dates, images, classifications}) {

    return (
            <BoxStyle>
                <StyledLink to={id}>  
                {/* <a href="#"><img src={images[0].url} alt="" style={{height: "150px"}}/></a> 
                <div> */}
                <h1>X</h1>
                <h4>Name:{name}</h4>
                {/* <p>Date:{dates.start.localDate}</p> */}
                    {/* <p>
                       Category:  {classifications[0].segment.name}
                    </p>
                    <p>
                       Genre:  {classifications[0].genre.name}
                    </p>
                    <p>
                       Date: {dates.start.localDate}
                    </p>
                </div> */}
                {console.log(id)}
             <Button name="Details"></Button></StyledLink>
            </BoxStyle>
    )
}

