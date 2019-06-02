import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookAuth from 'react-facebook-auth'

class FacebookLogin extends Component {
	state = {
		success: ''
	}

	MyFacebookButton = ({ onClick }) => (
		<i class="fa fa-facebook icon icon-facebook" onClick={onClick}></i>
	);
	authenticate = async (res) => {
		try {
			const data = await axios.post('http://192.168.1.108:3000/v1/auth/facebook', { accessToken: res.accessToken })
			this.setState({ success: data.data.success })
		}
		catch (error) {
			this.setState({ success: 'false' })
		}
	}

	render() {
		return (
			<li>
				<FacebookAuth
					appId="507835646419191"
					callback={this.authenticate}
					component={this.MyFacebookButton}
				/>
				{this.state.success === 'true' && <Redirect push to='role' />}
				{this.state.success === 'false' &&
					<div class="alert alert-danger">
						<strong>Error!</strong> Couldn't sign you in.<br />
						Please try again later.
					</div>
				}
			</li>
		)
	}
}
export default FacebookLogin
