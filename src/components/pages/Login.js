import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import axiosInstance from '../../intercept.js'

class Login extends Component {
    constructor(props) {
        super(props);

        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token === null) {
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
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }


    submitForm = (e) => {
        e.preventDefault()

        const user_info = {
            username: this.state.username,
            password: this.state.password
        };

        // if(user_info){
        //     localStorage.setItem("token","julfikar")
        //     this.setState({
        //             loggedIn:true
        //         })
        // }
        // axios.post('http://workapis.pythonanywhere.com/api/login/', user_info)
        // .then(res => {

        //     localStorage.setItem("token", JSON.stringify(res))
        //     this.setState({
        //                     loggedIn:true
        //                 })
        //             }
        // );

        // axios.post('http://workapis.pythonanywhere.com/api/login/', user_info)
        // .then(resp => {
        //     console.log('data',resp);
        //     if(resp.length > 0){
        //         localStorage.setItem("token", JSON.stringify(resp))
        //         this.setState({
        //                 loggedIn:true
        //         })
        //     }else{
        //         alert('Your username and password not match')
        //     }
        // } 

        //     // window.localStorage.setItem('token', res.data.data.token)
        // );

        axiosInstance.post('/login/', user_info).then(response => {

            if(response.data != null){

                console.log('76', response.data);
                console.log('78', response.data);
                localStorage.setItem("token", JSON.stringify(response.data))
                
                this.setState({
                    loggedIn: true
                })
            } else {

                alert("Empty data found")
            }
            
        })
            .catch(err => {
                // what now?
                console.log(err);
              
            })

    
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/dashboard" />
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
                                            value={this.state.username} onChange={this.onInputChange} />
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