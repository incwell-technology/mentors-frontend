import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class GoogleLoginComponent extends Component {
	state = {
		status: ''
	}

	handleAuth = async (res) => {
		try {
			console.log(res.accessToken)
			const data = await axios.post('http://192.168.1.130:3000/v1/auth/google', {accessToken: res.accessToken})
			console.log(data)
			this.setState({status: data.status})
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<li>
				{ this.state.status === 200 && <Redirect push to='home' /> }
				<GoogleLogin
					clientId="442918571972-gkidqu670g878nl2d889hlj11gei0068.apps.googleusercontent.com"
					render={renderProps => (
						<i style={{cursor: 'pointer'}} className="fab fa-google" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
					  )}
					buttonText="Login"
					onSuccess={this.handleAuth}
					onFailure={this.handleAuth}
					cookiePolicy={'single_host_origin'}
				/>
					{/* <a href="#">
						<i className="fab fa-google" />
					</a> */}

			</li>
		)
	}
}

export default GoogleLoginComponent