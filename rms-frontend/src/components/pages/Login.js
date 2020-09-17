import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token === null) {
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

 onInputChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }


    submitForm = (e) => {
        e.preventDefault()
        const {username,password} = this.state
        // login start
        if(username === "A" && password ==="b") {
            localStorage.setItem("token","julfikar")
            this.setState({
                loggedIn:true
            })
            console.log(username);
        }
    }

    render() {
        if(this.state.loggedIn) {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div className="login-bg-color">
                <div className="container">
                    {/* Material form login */}
                    <div className="login-area">
                        <div className="login-card">
                            {/*Card content*/}
                            <div className="login-card-card-body">
                                <div className="logo-login">RMS</div>
                                {/* Form */}
                                <h3>User Login:</h3>
                                <form className="text-center" onSubmit={this.submitForm}>
                                    <div className="form-group">
                                        <input type="text" id="materialLoginFormEmail" name="username" 
                                        className="form-control" placeholder=" Enter your Username" 
                                        value={this.state.username} onChange={this.onInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="materialLoginFormPassword" name="password"
                                         className="form-control" placeholder="Enter Your Password"
                                         value={this.state.password} onChange={this.onInputChange} />
                                        <a href="" className="text-right float-right forgot">Forgot password?</a>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox checkbox-base">
                                            <input id={1} type="checkbox" />
                                            <label htmlFor={1}>
                                                Remember Me
              </label>
                                        </div>
                                    </div>
                                    {/* Sign in button */}
                                    <div className="white-text">
                                        <button className="btn btn-outline  btn-block my-4 " type="submit">
                                            SIGN IN
            </button>
                                    </div>
                                    {/* <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button> */}
                                    {/* Register */}
                                    <p className="newuser">Not a Member?
            <a href="">Register</a>
                                    </p>
                                    {/* Social login */}
                                </form>
                                {/* Form */}
                            </div>
                        </div>
                    </div>
                    {/* Material form login */}
                </div>

            </div>
        );
    }
}

export default Login;