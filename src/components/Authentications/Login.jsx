import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

require('dotenv').config({
	path: '.env'
})
let baseUrl
if(process.env.NODE_ENV === 'development'){
	baseUrl = 'http://192.168.1.110:3000/v1/mentors/login'
} else {
	baseUrl = process.env.REACT_APP_BASE_URL
}

const Failed = () => {
	return (
		<div className='login-warning'>
			Login Failed. Please try again.
		</div>
	)
}

// Component to call when user has signed up using oauth
// and signs in using email
const NoPassword = () => {
	return (
		<div className='login-warning'>
			Please sign in using your oauth provider.
		</div>
	)
}

class Login extends Component {
	state = {
		email: '',
		password: '',
		status: ''
	}

	handleSubmit = async e => {
		e.preventDefault()
		try {
			const res = await axios.post(baseUrl, this.state)
			if (res.status === 200) {
				this.setState({ status: res.status })
			}
		} catch (error) {
			console.log(error.response.status)
			this.setState({ status: error.response.status })
		}
	}

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		console.log(process.env.PUBLIC_URL)
		return (
			<>
				{this.state.status === 200 && <Redirect push to='/home' />}
				{this.state.status === 400 && <Failed />}
				{this.state.status === 403 && <Redirect push to='/verification' />}
				<form onSubmit={this.handleSubmit} method="post">
					<input type="email" onChange={this.handleInput} name="email" placeholder="Email address" />
					<input type="password" onChange={this.handleInput} name="password" placeholder="Password" />
					<input type="submit" value="Login" />
				</form>
				<div className="signup">
					<p>or</p>
					<p>Sign in with</p>
					<ul>
						<li>
							<a href="#">
								<i className="fab fa-facebook" />
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fa-google" />
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fa-linkedin-in" />
							</a>
						</li>
					</ul>
				</div>
			</>
		)
	}
}

export default Login