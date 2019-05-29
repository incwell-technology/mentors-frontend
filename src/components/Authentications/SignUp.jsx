import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class SignUp extends Component {
	state = {
		first_name: "",
		last_name: "",
		email: "",
		user_role: "",
		password: "",
		confirm_password: ""
	}

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value })
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://192.168.1.120:3000/v1/mentors/signup",
				this.state
			);

			console.log(res);
			this.setState({ status: res.status });
		}
		catch (error) {
			console.log(error);
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

	validity = ({ first_name, last_name, email, user_role, password, confirm_password }) => {
		return (first_name !== "" &&
			last_name !== "" &&
			email !== "" &&
			password !== "" &&
			confirm_password !== "" &&
			user_role !== "1" || user_role !== "0" &&
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
				{this.state.status === 201 && <Redirect to="/Test" />}
				<form onSubmit={this.handleSubmit} method="post">
					<input type="radio" onChange={this.handleInput} className="mentor" name="user_role" value="1" checked="checked" /> Mentor
					<input type="radio" onChange={this.handleInput} className="student" name="user_role" value="0" /> Student
					<input type="text" onChange={this.handleInput} name="first_name" placeholder="First Name *" autoComplete="off" /><br />
					{this.state.first_name.length > 0 && !this.validateFirstName(this.state.first_name) &&
						<div className="helper"> <p>Enter valid name</p></div>}
					<input type="text" onChange={this.handleInput} name="last_name" placeholder="Last Name *" autoComplete="off" /><br />
					{this.state.last_name.length > 0 && !this.validateLastName(this.state.last_name) &&
						<div className="helper"> <p>Enter valid name</p></div>}
					<input type="email" onChange={this.handleInput} name="email" placeholder="Email address *" /><br />
					{this.state.email.length > 0 && !this.validateEmail(this.state.email) &&
						<div className="helper"> <p>Email not valid</p></div>}

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
							style={{ background: "gray", cursor: "not-allowed" }}
							type="submit"
							value="Signup"
							disabled
						/>
					)}
					{
						this.validity(this.state) && (
							<input style={{ color: 'red' }} type="submit" value="Signup" />
						)}
				</form>

			</div>
		);
	}
}
