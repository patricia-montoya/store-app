import React from 'react'
import { AuthForm } from '../Styled/Forms'
import formHeader from '../../assets/images/form-header.jpg'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isSignUp: true
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

        if(this.state.isSignUp) {
            this.props.signin(authData)
        } else {
            this.props.signup(authData)
        }
    }

    swithAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp}
        })
    }

    render() {
        let errorMessage = ''
        if(this.props.auth) {
            if(this.props.auth.error) {
                errorMessage = this.props.auth.error.message
            }
        }

        return ( <>
            <AuthForm onSubmit={this.submitHandler}>
                <img src={formHeader} className="header-form" alt="Join us!"/>
                {errorMessage}
                <h1>Sign {this.state.isSignUp ? 'In' : 'Up'}</h1>
                <label>Email</label>
                <input type="email" value={this.state.email} name="email" onChange={this.changeHandler}/>
                <label>Password</label>            
                <input type='password' value={this.state.password} name="password" onChange={this.changeHandler}/>
                <input type='submit' value={this.state.isSignUp ? 'Sign In' : 'Sign Up'}/>
            </AuthForm>
                <button onClick={this.swithAuthModeHandler}>Switch to Sign {this.state.isSignUp ? 'Up' : 'In'}</button>
        </> )
    }
}

export default Auth;