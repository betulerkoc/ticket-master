import logo from '../../ticket.svg'
import React from 'react'
import {LogoStyle} from '../../style'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <LogoStyle><Link to="/"><img src={logo} alt="logo" /></Link></LogoStyle>
    )
}
