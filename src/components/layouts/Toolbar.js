import React from 'react'
import { NavLink } from 'react-router-dom'
import {Header} from '../Styled/Header'
import appLogo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/cart-icon.png'
import ComicFilter from '../Comics/ComicFilter'
 

const Toolbar = (props) => {
    return <Header>
            <img className="logo" src={appLogo} alt="Welcome to Comic city"/>
           {/* <ComicFilter {...props}/> */}
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    { props.isAuth ? <li><NavLink to="/logout">Logout</NavLink></li>
                            : <li><NavLink to="/auth">Authenticate</NavLink></li> } 
                    <li><NavLink to="/cart"><img className="cart-icon" src={cartIcon} alt="Cart"/></NavLink></li>
                </ul>
            </nav>
        </Header>   
    }

export default Toolbar