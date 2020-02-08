import StyledButton from './styles';

import React from 'react'

export default function Button(props) {
    return (
    <StyledButton data-test="go-to">{props.name}</StyledButton>
    )
}