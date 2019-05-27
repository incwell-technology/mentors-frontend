import React from 'react'
import GoogleLogin from './google/GoogleLogin'
import FacebookLogin from './facebook/FacebookLogin'
import LinkedInLogin from './linkedin/LinkedInLogin'


const Social = () => {
	return (
		<div className='signup'>
			<p>or</p>
			<p>Sign in with</p>
			<ul>
				<FacebookLogin />
				<GoogleLogin />
				<LinkedInLogin />
			</ul>
		</div>
	)
}

export default Social