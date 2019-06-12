import styled from 'styled-components'

export const Card = styled.div`
    color: black;
    text-align: center;
`;

export const ProductCard = styled(Card)`
    margin: 15px 12px;
    padding: 0;
    width: 240px;
    display: inline-block;
    height: 500px;
    vertical-align: middle;
    box-shadow: 2px 2px 4px 4px #ccc;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    
    img {
        width: 100%;
        height: 65%;
    }

    .comic-btn,
    .comic-link {
        text-decoration: none;
        background: #990000;
        color: white;
        padding: 4px;
        margin: 2px;
        border: 1px solid #990000;
        border-radius: 4px;
        font-family: inherit;
        font-size: 16px;
        cursor:pointer;
    }.comic-btn:hover,
    .comic-link:hover{
        background: black;
        color: white;
        border-color: black;
    }&:hover {
        background: #ffa31a;
        color: black;
        border-color: #ffa31a;
    }
`;

export const ProductDetail = styled(Card)`
    
`
