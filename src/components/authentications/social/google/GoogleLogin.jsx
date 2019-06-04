import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

require('dotenv').config({ path: '.env' })
const key = process.env.REACT_APP_GOOGLE_KEY
let base_url

if (process.env.NODE_ENV === "development") {
	base_url = 'http://192.168.1.110:3000/v1/auth/google'
}
else {
	base_url = process.env.REACT_APP_BASE_URL
}


class GoogleLoginComponent extends Component {
	state = {
		success: ''
	}

	handleAuth = async (res) => {
		try {
			const data = await axios.post(base_url, { accessToken: res.accessToken })
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
					clientId={process.env.REACT_APP_GOOGLE_KEY}
					render={renderProps => (
						<i style={{ cursor: 'pointer' }} className="fa fa-google icon icon-google" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
					  )}
					buttonText="Login"
					onSuccess={this.handleAuth}
					onFailure={this.handleAuth}
					cookiePolicy={'single_host_origin'}
				/>
			</li>
		)
	}
}

export default GoogleLoginComponent