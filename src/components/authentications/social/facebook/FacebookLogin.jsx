import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

require('dotenv').config({ path: '.env' })
const key = process.env.REACT_APP_FACEBOOK_KEY
let base_url

if (process.env.NODE_ENV === "development") {
	base_url = process.env.REACT_APP_DEV_URL +'/v1/auth/facebook'
}
else {
	base_url = process.env.REACT_APP_BASE_URL
}

class FacebookLoginComponent extends Component {
	state = {
		success: '',
		userData: {},
		accessToken: ''
	}

	authenticate = async (res) => {
		try {
			const data = await axios.post(base_url, { accessToken: res.accessToken })
			this.setState({ success: data.data.success, userData: data.data.payload.data, accessToken: data.data.payload.accessToken })
		} catch (error) {
			console.log(error)
			this.setState({ success: 'false', payload: 'Nothing' })
		}
	}

	render() {
		console.log(this.state.success === true)
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
				<FacebookLogin
					appId={key}
					callback={this.authenticate}
					render={renderProps => (
						<i style={{ cursor: 'pointer' }} onClick={renderProps.onClick} className="fa fa-facebook icon icon-facebook"></i>
					)}
				/>
			</li>
		)
	}
}
export default FacebookLoginComponent
