import styled from 'styled-components'

export const FilterForm = styled.form.attrs(props => ({
    onSubmit: props.onSubmit 
}))`
    width: 30%;
    display: block;
`;