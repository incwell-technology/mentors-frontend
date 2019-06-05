import React, { Component } from 'react'
import GitHubLogin from 'react-github-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
require('dotenv').config({
	path: '.env'
})

const key = process.env.REACT_APP_GITHUB_KEY
let baseUrl
if(process.env.NODE_ENV === 'development'){
	baseUrl = 'http://192.168.1.110:3000/v1/auth/github'
} else {
	baseUrl = process.env.REACT_APP_BASE_URL
}

class GitHub extends Component {
    state = { success: '' }

    handleAuth = async (res) => {
        console.log(res)
		try {
			const data = await axios.post(`${baseUrl}`, { accessToken: res.accessToken })
			this.setState({ success: data.data.success })
		} catch (error) {
			this.setState({ success: 'false' })
        }
	}

    failedAuth = async (res) => {
        this.setState({success: 'false'})
    }
    render() { 
        return (
            <li>
                {this.state.success === 'true' && <Redirect push to='/home'/>}
                <GitHubLogin clientId={key}
                    onSuccess={this.handleAuth}
                    onFailure={this.failedAuth}
                />
            </li>
        );
    }
}
 
export default GitHub;