import React from 'react'
import { AuthForm } from '../Styled/Forms'
import PropTypes from 'prop-types'
import formHeader from '../../assets/images/form-header.jpg'

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        this.props.signupUser(authData)
    }

    render() {
        return (
            <AuthForm onSubmit={this.submitHandler}>
                <img src={formHeader} className="header-form" alt="Join us!"/>
                <h1>SignUp</h1>
                <label>Email</label>
                <input type="email" value={this.state.email} name="email" onChange={this.changeHandler}/>
                <label>Password</label>            
                <input type='password' value={this.state.password} name="password" onChange={this.changeHandler}/>
                <input type='submit' value='Sign Up'/>
            </AuthForm>
        )
    }
}

SignUp.propTypes = {
    email:PropTypes.string.isRequired,
    password: PropTypes.isRequired
}
export default SignUp;