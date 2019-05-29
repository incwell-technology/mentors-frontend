import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login'

class FacebookLoginComponent extends Component {
	state = {
		status: ''
	}

	responseFacebook = async (res) => {
		try {
			console.log(res)
			const data = await axios.post('http://192.168.1.120:3000/v1/auth/facebook', { accessToken: res.accessToken })
			console.log(this.onSuccess)
			this.setState({ status: data.status })
		} catch (error) {
			console.log(this.onFailure)
		}

	}
	render() {
		return (
			<li>
				{this.state.status === 200 && <Redirect push to='role' />}

				<FacebookLogin
					appId="507835646419191"
					autoLoad={true}
					fields="name,email,picture"
					callback={this.responseFacebook}
					render={renderProps => (
						<i style={{ cursor: 'pointer' }} className="fab fa-facebook" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
					
						)}
					onSuccess={this.responseFacebook}
					onFailure={this.responseFacebook}
				/>,
				{/* <FacebookLogin
					appId="2ecff71ff55709ee4a8e"
					render={renderProps => (
						<i style={{ cursor: 'pointer' }} className="fab fa-facebook" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
					)}
					buttonText="Login"
					onSuccess={this.handleAuth}
					onFailure={this.handleAuth}
					cookiePolicy={'single_host_origin'}
				/> */}

			</li>
		)
	}
}

export default FacebookLoginComponent