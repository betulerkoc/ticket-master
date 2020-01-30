// import { StyledMovie } from './styles';
// import Button from '../Button';

// export const Movie = () => {
//     <StyledMovie>
//         <Button name="Betül">Test</Button>
//     </StyledMovie>
// };


import React from 'react'
import {BoxStyle, StyledLink} from './styles/index'

export default function MovieCard({name, description, image, id}) {
    return (
        <>
            <BoxStyle>
                <StyledLink to={`${id}`}>  
                <a href="#"><img src={image} alt="" style={{height: "150px"}}/></a>
                <div>
                    <h4>
                       Name:  {name}
                    </h4>
                    <p>
                        Description: {description}
                    </p>
                </div>
             <button>Details</button></StyledLink>
            </BoxStyle>
        </>
    )
}

