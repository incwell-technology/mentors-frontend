import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookAuth from 'react-facebook-auth'

require('dotenv').config({ path: '.env' })
const key = process.env.REACT_APP_FACEBOOK_KEY
let base_url

if (process.env.NODE_ENV === "development") {
	base_url = 'http://192.168.1.110:3000/v1/auth/facebook'
}
else {
	base_url = process.env.REACT_APP_BASE_URL
}
console.log(process.env.REACT_APP_BASE_URL)
class FacebookLoginComponent extends Component {
	state = {
		status: '',
		error: ''

	}

	MyFacebookButton = ({ onClick }) => (
		<i style={{ cursor: 'pointer' }} class="fa fa-facebook icon icon-facebook" onClick={onClick}></i>
	);
	authenticate = async (res) => {
		try {
			console.log(res.accessToken)
			const data = await axios.post(base_url, { accessToken: res.accessToken })
			console.log(data.status)
			this.setState({ status: data.status })
		}
		catch (error) {
			if (error.name === 'Error') {
				this.setState({ error: error.name })
			}
			console.log(typeof error)
		}

	}
	render() {
		return (
			<li>

				{this.state.error.length > 0 && <div className="alert alert-warning">
					<strong>Error!</strong> Signin failed.<br /> please try again!</div>}
				<FacebookAuth
					appId={key}
					callback={this.authenticate}
					component={this.MyFacebookButton}
				/>
				{this.state.status === 201 && <Redirect push to='/role' />}
				{this.state.status === 200 && <Redirect push to='/page' />}
				{this.state.status === 409 && <Redirect push to='/pop' />}
			</li>
		)
	}
}
export default FacebookLoginComponent
