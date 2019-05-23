import React from 'react'
import GoogleLogin from './Google/GoogleLogin'
import FacebookLogin from './Facebook/FacebookLogin'
import LinkedInLogin from './LinkedIn/LinkedInLogin'


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