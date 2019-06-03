import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookAuth from 'react-facebook-auth'

require('dotenv').config({ path: ".env" })
const key = process.env.REACT_APP_API_KEY

class FacebookLogin extends Component {
	state = {
		// success: '',
		status:''

	}
	MyFacebookButton = ({ onClick }) => (
		<i class="fa fa-facebook icon icon-facebook" onClick={onClick}></i>
	);
	authenticate = async (res) => {
		try {
			const data = await axios.post('http://192.168.1.105:3000/v1/auth/facebook', { accessToken: res.accessToken })
			// .catch(function (error) {
			// console.log(error);
			// })			
			this.setState({ status: res.status })
			
			
		}
		catch (error) {
			//this.setState({})
			console.log(error)
		}

	}
	render() {
		return (
			<li>
				<FacebookAuth
					appId={key}
					callback={this.authenticate}
					component={this.MyFacebookButton}
				/>
				{this.state.status === '201' && <Redirect push to='role' />}
				{this.state.status === '200' && <Redirect push to='home' />}
				{this.state.status === '409' && <Redirect push to='pop' />}
				{this.state.status === '404' &&
					<div class="alert alert-danger">
						<strong>Error!</strong>
						Please try again later.
					</div>
				}
			
			</li>
		)
	}
}
export default FacebookLogin
