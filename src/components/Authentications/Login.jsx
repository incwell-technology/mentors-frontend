import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Failed = () => {
	return (
		<div className='login-warning'>
			Login Failed. Please try again.
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
			const res = await axios.post(process.env.PUBLIC_URL + ':3000/v1/mentors/login', this.state)
			if (res.status === 200) {
				this.setState({ status: res.status })
			}
		} catch (error) {
			this.setState({ status: 409 })
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
				{this.state.status === 409 && <Failed />}
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