import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

let base_url
if (process.env.NODE_ENV === "development") {
	base_url = process.env.REACT_APP_DEV_URL +'/v1/mentors/signup'
}
else {
	base_url = process.env.REACT_APP_BASE_URL +'/v1/mentors/signup'
}
export default class SignUp extends Component {
	state = {
		first_name: "",
		last_name: "",
		email: "",
		user_role: "Mentors",
		password: "",
		confirm_password: "",
		error: ""
	}

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value })
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(base_url, this.state);
			this.setState({ status: res.status });
		}
		catch (error) {
			if (error.name === 'Error') {
				this.setState({ error: error.name })
			}
		}
	};

	validateEmail = ({ email }) => {
		const emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return emailReg.test(this.state.email);
	}

	validatePass = ({ password }) => {
		const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
		return pass.test(this.state.password)
	}
	validateFirstName = ({ first_name }) => {
		const firstName = /^([^0-9]*)$/
		return firstName.test(this.state.first_name)
	}

	validateLastName = ({ last_name }) => {
		const lastName = /^([^0-9]*)$/
		return lastName.test(this.state.last_name)
	}

	validity = ({ first_name, last_name, email, password, confirm_password }) => {
		return (first_name !== "" &&
			last_name !== "" &&
			email !== "" &&
			password !== "" &&
			confirm_password !== "" &&
			this.validateFirstName(this.state.first_name) &&
			this.validateLastName(this.state.last_name) &&
			this.validateEmail(this.state.email) &&
			this.validatePass(this.state.password) &&
			this.state.password === this.state.confirm_password
		);

	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} method="post">
					
					<input type="radio" onChange={this.handleInput} className="mentor" name="user_role" value="Mentors" checked /> Mentor
					<input type="radio" onChange={this.handleInput} className="student" name="user_role" style={{marginLeft: '10px'}} value="Students" /> Student
					<input type="text" onChange={this.handleInput} name="first_name" placeholder="First Name *" autoComplete="off" /><br />
					{this.state.first_name.length > 0 && !this.validateFirstName(this.state.first_name) &&
						<div className="helper"> <p>Enter valid name</p></div>}
					<input type="text" onChange={this.handleInput} name="last_name" placeholder="Last Name *" autoComplete="off" /><br />
					{this.state.last_name.length > 0 && !this.validateLastName(this.state.last_name) &&
						<div className="helper"> <p>Enter valid name</p></div>}
					<input type="email" onChange={this.handleInput} name="email" placeholder="Email address *" /><br />
					{this.state.email.length > 0 && !this.validateEmail(this.state.email) &&
						<div className="helper"> <p>Please enter valid email.</p></div>}

					<input type="password" onChange={this.handleInput} name="password" placeholder="Password *" autoComplete="off" /><br />
					{this.state.password.length > 0 && !this.validatePass(this.state.password) &&
						(<div className="helper" ><p> 1.Password must be atleast 8 characters long.<br />
							2.Password must contain special character<br />
							3.Password must contain number.<br />
							4.Password must contain ateast 1 Capital letter.</p>
						</div>)
					}

					<input type="password" onChange={this.handleInput} name="confirm_password" placeholder="Confirm Password *" autoComplete="off" required /><br />

					{this.state.confirm_password !== "" && this.state.confirm_password !== this.state.password && (
						<div class="helper">Passwords do not match.</div>
					)}


					{!this.validity(this.state) && (
						<input
							style={{ opacity: '0.6', cursor: "not-allowed" }}
							type="submit"
							value="Signup"
							disabled
						/>
					)}
					{this.validity(this.state) && (
						<input type="submit" value="Signup" />
					)}

					{this.state.status === 201 && <Redirect to="/home" />}
					{this.state.status === 422 && <div class="alert alert-warning">
						<strong>Error!</strong> Email already exist.<br /> please try again!</div>}
					{this.state.error.length > 0 && <div class="alert alert-warning">
						<strong>Error!</strong> SignUp failed.<br /> please try again!</div>}

				</form>

			</div>
		);
	}
}
