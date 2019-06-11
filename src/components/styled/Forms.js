import styled from 'styled-components'

const Form = styled.form.attrs(props => ({
    onSubmit: props.onSubmit 
}))`
    margin-top: 70px;
    margin-left: 30%;

`;

export const RegisterForm = styled(Form)`
    border: 1px solid #ccc;

` 

export const LoginForm = styled(Form)`
    margin-left: 50%
`