import React from 'react'
import { RegisterForm } from './styled/Forms'
import PropTypes from 'prop-types'
import formHeader from '../assets/images/form-header.jpg'

class Register extends React.Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            }
        },
        isSignup: true
    }

    render() {
        return <RegisterForm>
            <img src={formHeader} className="header-form" alt="Register Now"/>
            <h1>Register</h1>
            <input type='email' placeholder='EMAIL'/>
            <input type='password'placeholder='PASSWORD'/>
            <input type='submit' value='Register Now'/>
        </RegisterForm>
    };

}

Register.propTypes = {
    fullName: PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.isRequired
}
export default Register;