import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

require('dotenv').config({ path: ".env" })
const key = process.env.REACT_APP_FACEBOOK_KEY

class Facebook extends Component {
	state = {
		status: ''

	}

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
				<FacebookLogin
					appId={key}
					callback={this.authenticate}
					render={renderProps => (
						<i style={{cursor: 'pointer'}} onClick={renderProps.onClick} class="fa fa-facebook icon icon-facebook"></i>
					)}
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
export default Facebook
