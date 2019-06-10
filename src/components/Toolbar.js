import React from 'react'
import { Link } from 'react-router-dom'
import {Header} from '../components/styled/Header'
import ComicFilter from '../components/ComicFilter'
import appLogo from '../assets/images/logo.png'
import cartIcon from '../assets/images/cart-icon.png'

const Toolbar = () => {
    return <Header>
        <img className="logo" src={appLogo} alt="Comic City Logo"/>
        <ComicFilter />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <img className="cart-icon" src={cartIcon} alt="Shopping cart" />
    </Header>
}

export default Toolbar