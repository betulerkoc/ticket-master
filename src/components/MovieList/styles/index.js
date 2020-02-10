import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const BoxStyle = styled.div `
    border: 2px solid #00001a;
    background: #f2f2f2;
    margin: 30px auto;
    color: #00001a;
    width: 85%;
    text-align: center;
    
    img{
        width: 100%;
    }
    button{
        text-transform: uppercase;
        background: #ff99bb;
        color: #ff99bb;
        margin: 20px;
        font-size: 15px;
    }
`;



export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    
    button{
        text-transform: uppercase;
        background: #00001a;
        justify-content: center;
        color: white;
        font-size: 15px;
        block-size: 25px !important;
    }
`;

export const ListStyle = styled.div `
    border: 2px solid #00001a;
    text-align: center;
    color: white;
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
`
