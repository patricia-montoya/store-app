import React from 'react'
import { NavLink } from 'react-router-dom'
import {Header} from '../styled/Header'
import ComicFilter from '../ComicFilter'
import appLogo from '../../assets/images/logo.png'

const Toolbar = () => {
    return <Header>
        <img className="logo" src={appLogo} alt="Comic City Logo"/>
        <ComicFilter />
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </Header>   
}

export default Toolbar