
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

let base_url
if (process.env.NODE_ENV === "development") {
    base_url = 'http://192.168.1.110:3000/v1/auth/reauthorize'
}
else {
    base_url = process.env.REACT_APP_BASE_URL
}
class PopUp extends Component {
    state = {
        email: '',
        password:''
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post(base_url, this.state)
            if (res.status === 201) {
                this.setState({ status: res.status })
            }
        } catch (error) {
            console.log(error)
        }
    }
    validateEmail = ({ email }) => {
        const emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(this.state.email);
    }
    validatePass = ({ password }) => {
        const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        return pass.test(this.state.password)
    }
    validity = ({email, password}) => {
        return (
            email !== "" &&
            password !== "" &&
            this.validateEmail(this.state.email) &&
            this.validatePass(this.state.password) 
        );}

    render() {
        return (
            <div className="verifybox">
                <div className="verifyform">
                    <h3>Enter your email</h3><hr/>
                    <form onSubmit={this.handleSubmit} method="post">

                        {this.state.status === 201 && <Redirect to="/home" />}
                        Enter your email address:

                <input type="email" name="email" onChange={this.handleInput} placeholder="Email address" required /> <br />
                        {this.state.email.length > 0 && !this.validateEmail(this.state.email) &&
                            <div className="helper"> <p>Please enter valid email.</p></div>}
                        Enter your password:
                <input type="password" name="password" onChange={this.handleInput} placeholder="Password" required />
                        {this.state.password.length > 0 && !this.validatePass(this.state.password) &&
                            (<div className="helper" ><p> 1.Password must be atleast 8 characters long.<br />
                                2.Password must contain special character<br />
                                3.Password must contain number.<br />
                                4.Password must contain ateast 1 Capital letter.</p>
                            </div>)
                        }
                        {!this.validity(this.state) && (
                            <input
                                style={{ opacity: '0.6', cursor: "not-allowed" }}
                                type="submit"
                                value="Signup"
                                disabled
                            />
                        )}
                        {this.validity(this.state) && (
                            <input type="submit" value="Signup" />
                        )}
                    </form>
                </div>
            </div>

        )

    }
}

export default PopUp