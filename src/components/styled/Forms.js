import styled from 'styled-components'

export const Form = styled.form.attrs(props => ({
    onSubmit: props.onSubmit 
}))`

`;

export const RegisterForm = styled(Form)`
    border: 1px solid #ccc;


` 