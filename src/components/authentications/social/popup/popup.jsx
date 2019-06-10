//TODO dummy page for inserting email incase the email is private. changes required
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
//import Popup from "reactjs-popup"

class PopUp extends Component {
    state = {
        email: ''
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://192.168.1.108:3000/v1/mentors/signup', this.state)
            if (res.status === 200) {
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
    render() {
        return (

            <div className="verifybox">
                <div className="verifyform">
                    <form onSubmit={this.handleSubmit} method="post">

                        {this.state.status === 201 && <Redirect to="/Test" />}
                        Enter your email address:
                        {this.state.email.length > 0 && !this.validateEmail(this.state.email) &&
                            <div className="helper"> <p>Email not valid</p></div>}
                <input type="email" name="email" placeholder="Email address" required /> <br />
                        Enter your password:
                <input type="password" name="password" placeholder="Password" required />
                        {!this.validateEmail(this.state.email) &&
                            <input style={{ opacity: '0.4', cursor: "not-allowed" }} type="submit" value="Submit" disabled />}

                        {this.validateEmail(this.state.email) && (
                            <input type="submit" value="Signup" />
                        )}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        )

    }
}

export default PopUp