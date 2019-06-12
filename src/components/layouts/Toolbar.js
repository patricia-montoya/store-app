import React from 'react'
import { NavLink } from 'react-router-dom'
import {Header} from '../styled/Header'
import ComicFilter from '../ComicFilter'
import appLogo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/cart-icon.png'

const Toolbar = () => {
    return <Header>
        <img className="logo" src={appLogo} alt="Welcome to Comic city"/>
        <ComicFilter />
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
        <img className="cart-icon" src={cartIcon} alt="Cart"/>
    </Header>   
}

export default Toolbar