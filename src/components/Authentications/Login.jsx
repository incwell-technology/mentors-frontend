import React, { Component } from "react";

export default class Login extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} method="post">
					<div class="helper">please enter valid email.</div>
					<input type="email" onChange={this.handleInput} name="email" placeholder="Email address" required /> <br />
					<div class="helper">please enter correct password.</div>
					<input type="password" onChange={this.handleInput} name="password" placeholder="Password" required /><br />
					<input type="submit" value="Login" />
				</form>

				<p style={{
					fontSize: "22px"
				}}>or</p>
				<p style={{
					fontSize: "22px"
				}}>Sign in with</p>
				<ul>
					<li><a href="#"><i class="fa fa-facebook icon icon-facebook"></i></a></li>
					<li><a href="#"><i class="fa fa-google icon icon-google"></i></a></li>
					<li><a href="#"><i class="fa fa-linkedin icon icon-linkedin"></i></a></li>
					<li><a href="#"><i class="fa fa-github icon icon-github"></i></a></li>
				</ul>
			</div>
		);
	}
}
