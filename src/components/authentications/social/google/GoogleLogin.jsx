import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

require('dotenv').config({ path: '.env' })
let base_url

if (process.env.NODE_ENV === "development") {
	base_url = process.env.REACT_APP_DEV_URL +'/v1/auth/google'
}
else {
	base_url = process.env.REACT_APP_BASE_URL +'/v1/auth/google'
}


class GoogleLoginComponent extends Component {
	state = {
		success: '',
		userData: {},
		accessToken: ''
	}

	handleAuth = async (res) => {
		try {
			const data = await axios.post(base_url, { accessToken: res.accessToken })
			this.setState({ success: data.data.success, userData: data.data.payload.data, accessToken: data.data.payload.accessToken })
		} catch (error) {
			console.log(error)
			this.setState({ success: 'false', payload: 'Nothing' })
		}
	}

	render() {
		return (
			<li>
				{ !this.state.userData.hasOwnProperty('userRole') && Object.entries(this.state.userData).length != 0 && <Redirect push to='role' />}
				{ this.state.success === 'true' && this.state.userData.hasOwnProperty('userRole') && <Redirect push to={{
					pathname: '/',
					state: {
						accessToken: this.state.accessToken
					}
				}} /> }
				{ this.state.success === 'false' &&
					(<div className="alert alert-danger">
						<strong>Error!</strong> 
						Please try again later.
					</div>)
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