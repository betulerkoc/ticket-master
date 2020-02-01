import React from 'react'
import {BoxStyle, StyledLink} from './styles/index'

export default function MovieCard({name, id, dates, images, classifications}) {
    const url= "http://app.ticketmaster.com/";
    
    return (
        <>
            <BoxStyle>
                <StyledLink to={id}>  
                <a href="#"><img src={images[0].url} alt="" style={{height: "150px"}}/></a> 
                <div>
                    <h4>
                       Name:  {name}
                    </h4>
                    <p>
                       Category:  {classifications[0].segment.name}
                    </p>
                    <p>
                       Genre:  {classifications[0].genre.name}
                    </p>
                    <p>
                       Date: {dates.start.localDate}
                    </p>
                </div>
                {console.log(id)}
             <button>Details</button></StyledLink>
            </BoxStyle>
        </>
    )
}

