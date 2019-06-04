import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class GoogleLoginComponent extends Component {
	state = {
		success: ''
	}

	handleAuth = async (res) => {
		try {
			const data = await axios.post('http://192.168.1.130:3000/v1/auth/google', { accessToken: res.accessToken })
			this.setState({ success: data.data.success })
		} catch (error) {
			this.setState({ success: 'false' })
		}
	}

	render() {
		return (
			<li>
				{ this.state.status === 200 && <Redirect push to='home' /> }
				{!this.state.status === 200 &&
					<div class="alert alert-danger">
						<strong>Error!</strong>
						Please try again later.
					</div>
				}
				<GoogleLogin
					clientId="442918571972-gkidqu670g878nl2d889hlj11gei0068.apps.googleusercontent.com"
					render={renderProps => (
						<i style={{ cursor: 'pointer' }} className="fa fa-google icon icon-google" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
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