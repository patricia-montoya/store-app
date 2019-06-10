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

    .logo {
        margin-top:0.2rem;
        height:95%;
    }
    nav {
        height: 100%;
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
        display: flex;
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
        &:hover, &:active {
            background: #262626;
            border-bottom: 4px solid #ff9900;
            color: white;
        }
    }

    .cart-icon {
        height: 40px;
        width: 45px;
        margin: 0;
    }


`