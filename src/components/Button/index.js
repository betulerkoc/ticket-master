import StyledButton from './styles/index';
import React from 'react'

export default function Button(props) {
    return (
    <StyledButton>{props.name}</StyledButton>
    )
}