import styled from 'styled-components'

export const ItemsContainer = styled.div`
    position: fixed;
    top: 60px;
    right: 0; 
    width: 25%;
    background: white;
    color: #8c8c8c;
    padding: 10px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    p {
        text-align: center;
    }
`

export const Item = styled.div`
    color: black;
    list-style: none;
    display: block;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    box-sizing: border-box;

    button {
        display: inline-block;
        border: 0;
        background: transparent;
        outline: none;
        cursor: pointer;
    }

    p {
        text-align: left;
    }

    .item-delete {
        position:absolute;
    }

    .item-img {
        margin: 16px;
        width: 104px;
        height: 160px;
    }

    .item-info {
        margin: 20px;
        display: inline-block;
        vertical-align: top;
    }

    .item-name {
        white-space: normal;
    }
    
` 