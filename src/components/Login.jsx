import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit} method="post">
                <input type="email" onChange={this.handleInput} name="email" placeholder="Email address" />
                <input type="password" onChange={this.handleInput} name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        )
    }
}
