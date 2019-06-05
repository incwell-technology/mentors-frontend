import React from 'react'
import FacebookLogin from './facebook/FacebookLogin'
import LinkedInLogin from './linkedin/LinkedInLogin'
import GoogleLoginComponent from './google/GoogleLogin';


const Social = () => {
	return (
		<div className='signup'>
			<p>or</p>
			<p>Sign in with</p>
			<ul>
				<FacebookLogin />
				<GoogleLoginComponent />
				<LinkedInLogin />
				
			</ul>
		</div>
	)
}

export default Social