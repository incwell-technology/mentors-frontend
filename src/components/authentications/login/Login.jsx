import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Social from '../social/Social'


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
			const res = await axios.post('http://192.168.1.120:3000/mentors/login', this.state)
			if (res.status === 200) {
				this.setState({ status: res.status })
			}
		} catch (error) {
			console.log(error)
		}
	}

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<>
				{this.state.status === 200 && <Redirect push to='/home' />}
				{this.state.status === 409 && <Failed />}
				<form onSubmit={this.handleSubmit} method="post">
					<input type="email" onChange={this.handleInput} name="email" placeholder="Email address" />
					<input type="password" onChange={this.handleInput} name="password" placeholder="Password" />
					<input type="submit" value="Login" />
				</form>
				<Social />
			</>
		)
	}
}

export default Login