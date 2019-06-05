import React, { Component } from 'react'
import GitHubLogin from 'react-github-login'

class Github extends Component {
    state = {  }
    render() { 
        return (
            <li>
                <GitHubLogin 
                    className='fab fa-github'
                    clientId={process.env.REACT_APP_GITHUB_KEY}
                />
            </li>
        )
    }
}
 
export default Github;