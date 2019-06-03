import React, { Component } from "react";
import mentors from "./images/mentor.jpg";
import Login from "./login/Login";
import SignUpForm from "./signup/SignUp";
import AuthButtons from "./AuthButtons";


export default class Authentication extends Component {
	componentDidMount() {
		document.getElementById("defaultOpen").click();
	}
	render() {
		return (
			<div className="background">
				<div className="box">
					<div className="container">
						<div className="column1">
							<img src={mentors} alt="" />
						</div>
						<div className="column2">
							<AuthButtons />
							<div id="Login" className="tabcontent">
								<Login />
							</div>
							<div id="Signup" className="tabcontent">
								<SignUpForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
