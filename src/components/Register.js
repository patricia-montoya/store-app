import React from 'react'
import { RegisterForm } from '../components/styled/Forms'
import PropTypes from 'prop-types'
import formHeader from '../assets/images/form-header.jpg'

class Register extends React.Component {
    state = {
        fullName: '',
        email: '',
        user: '',
        password:''
    }

    render() {
        return <RegisterForm>
            <img src={formHeader} className="header-form" alt="Register Now"/>
            <h1>Register</h1>
            {/* <span>Full Name</span> */}
            <input type='text' placeholder='FULL NAME'/>
            {/* <span>Email</span> */}
            <input type='email' placeholder='EMAIL'/>
            {/* <span>User</span> */}
            <input type='text' placeholder='USER'/>
            {/* <span>Password</span> */}
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