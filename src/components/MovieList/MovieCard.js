import React from 'react'
import {BoxStyle, StyledLink} from './styles/index'
import Button from '../Button/index'
import PropTypes from 'prop-types';

export default function MovieCard({movieName, id, dates, images, type, category}) {

    return (
            <BoxStyle>
                <StyledLink to={id}>  
                <a href="#"><img src={images} alt="" style={{height: "150px"}}/></a> 
                <div> 
                <h4>Name:{movieName}</h4>
                  <p>Type:  {type} </p>
                  <p>Date:{dates}</p>
                </div>
               
             <Button name="Details"></Button></StyledLink>
            </BoxStyle>
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

