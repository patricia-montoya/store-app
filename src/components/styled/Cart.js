import styled from 'styled-components'

export const Cart = styled.div`
    width: 25%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 60px; 
    right: 0;
    align-items: center;
    padding: 10px 0;
    margin-right: 0;
    box-sizing: border-box;
    border: 4px solid black;
`

export const Item = styled.li`
    list-style: none;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    box-sizing: border-box;

    img {
        width: 104px;
        height: 160px;
    }

` 