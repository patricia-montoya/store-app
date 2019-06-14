import React from 'react'
import { NavLink } from 'react-router-dom'
import {Header} from './styled/Header'
import appLogo from '../assets/images/logo.png'
import cartIcon from '../assets/images/cart-icon.png'

class Toolbar extends React.Component {
    state = {
        cartOpened: false
    }

    cartHandler = () => {
        this.setState({
            cartOpened: !this.state.cartOpened
        })
    }

    render(){
        return <Header>
            <img className="logo" src={appLogo} alt="Welcome to Comic city"/>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/cart"><img className="cart-icon" src={cartIcon} alt="Cart"/></NavLink></li>
                </ul>
            </nav>
        </Header>   
    }
}

export default Toolbar