import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const StyledMovie = styled.div`
    position:relative;
    background: #000;
`;

export const BoxStyle = styled.div `
    border: 2px dashed #e9b2bc;
    background: #f3dfe3;
    margin: 30px auto;
    color: black;
    width: 85%;
    text-align: center;
    
    img{
        margin:15px;
    }
    button{
        text-transform: uppercase;
        background: #e9b2bc;
        color: white;
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
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    button{
        text-transform: uppercase;
        background: #e9b2bc;
        justify-content: center;
        color: white;
        margin-top: 50%;
        font-size: 15px;
        block-size: 25px !important;
    }
`;

export const ListStyle = styled.div `
    margin: 0 auto;
`
