import React from 'react'
import GoogleLogin from './google/GoogleLogin'
import Facebook from './facebook/FacebookLogin'
import LinkedInLogin from './linkedin/LinkedInLogin'
//import GithubLogin from './github/GithubLogin';


const Social = () => {
	return (
		<div className='signup'>
			<p>or</p>
			<p>Sign in with</p>
			<ul>
				<Facebook />
				<GoogleLogin />
				<LinkedInLogin />
				
			</ul>
		</div>
	)
}

export default Social