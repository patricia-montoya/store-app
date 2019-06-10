import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid black;
    color: black;
    padding: 20px;
    text-align: center;
    margin: 5px;
`;

export const ProductCard = styled(Card)`
    width: 15%;
    display: inline-block;
    height: 360px;

    img {
        width: 104px;
        height: 160px;
    }
`;

export const ProductDetail = styled(Card)`
    
`
