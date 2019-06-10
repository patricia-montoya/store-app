import React from 'react'
import { RegisterForm } from '../components/styled/Forms'
import PropTypes from 'prop-types'

class Register extends React.Component {
    state = {
        fullName: '',
        email: '',
        user: '',
        password:''
    }

    render() {
        return <RegisterForm>
            <span>Register</span>
            <span>Full Name</span>
            <input type='text' placeholder='Full Name'/>
            <span>Email</span>
            <input type='email' placeholder='Email'/>
            <span>User</span>
            <input type='text' placeholder='User'/>
            <span>Password</span>
            <input type='password'placeholder='Password'/>
            <input type='submit' vakue='Register Now'/>
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