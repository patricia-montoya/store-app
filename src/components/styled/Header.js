import styled from 'styled-components'

export const Header = styled.header`
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    color: azure;
    font-size: 18px;

    .logo {
        margin-top:0.2rem;
        height:95%;
    }
    nav {
        height: 100%;
        margin-left: 45%;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        height: 100%;
        
    }

    li {
        margin: 0;
        box-sizing: border-box;
        display: inline-block;
        height: 100%;
        align-items: center;
    }
    
    a {
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 16px 10px;
        border: 4px solid transparent;
        box-sizing: border-box;
        display: block;
        &:hover, &:active, &.active {
            background: #262626;
            border-bottom: 4px solid #ff9900;
            color: white;
        }
    }

    .cart-btn {
        border: 0;
        background: transparent;
        outline: none;
        margin-top: 16px;
        cursor: pointer;
    }

    .cart-icon {
        height: 25px;
        width: 35px;
        margin: 0 10px;
    }

`