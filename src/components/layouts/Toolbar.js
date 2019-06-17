import React from 'react'
import { NavLink } from 'react-router-dom'
import {Header} from '../Styled/Header'
import appLogo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/cart-icon.png'
import ComicFilter from '../Comics/ComicFilter'
import ShoppingCart from '../Cart/ShoppingCart'
 

class Toolbar extends React.Component {
    state = {
        cartOpened: false
    }

    cartToggle = () => {
        this.setState({
            cartOpened: !this.state.cartOpened
        })
    }


    render() {
        return <Header>
                <img className="logo" src={appLogo} alt="Welcome to Comic city"/>
            {/* <ComicFilter {...props}/> */}
                <nav>
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        { this.props.isAuth ? <li><NavLink to="/logout">Logout</NavLink></li>
                                : <li><NavLink to="/auth">Authenticate</NavLink></li> } 
                        <li><button className= "cart-btn" onClick={this.cartToggle}><img className="cart-icon" src={cartIcon} alt="Cart"/></button></li>
                        { this.state.cartOpened ? <ShoppingCart {...this.props}/> : null}
                    </ul>
                </nav>
            </Header>   
    }
}

export default Toolbar