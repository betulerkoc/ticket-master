// import { StyledMovie } from './styles';
// import Button from '../Button';

// export const Movie = () => {
//     <StyledMovie>
//         <Button name="Betül">Test</Button>
//     </StyledMovie>
// };


import React from 'react'
import {BoxStyle, StyledLink} from './styles/index'

export default function MovieCard({name, id, dates, _links, _embedded}) {
    const url= "http://app.ticketmaster.com/";
    
    return (
        <>
            <BoxStyle>
                <StyledLink to={`${id}`}>  
                {/* <a href="#"><img src={`${url}${_links.attractions}`} alt="" style={{height: "150px"}}/></a> */}
                {/* {`${_embedded.attractions[0].image.url}`}; */}
                <div>
                    <h4>
                       Name:  {name}
                    </h4>
                    <p>
                       Time Zone:  {dates.timezone}
                    </p>
                    <p>
                       Date: {dates.start.localDate}
                    </p>
                    <p>
                        Category: {_embedded.categories[0].name}
                    </p>
                </div>
                {console.log(id)}
             <button>Details</button></StyledLink>
            </BoxStyle>
        </>
    )
}

