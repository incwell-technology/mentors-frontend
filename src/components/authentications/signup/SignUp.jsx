import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    user_role: "",
    status: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://192.168.1.110:3000/mentors/signup",
        this.state
      );
      //this.state.status = 201;

      console.log(res);
      this.setState({ status: res.status });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {this.state.status === 201 && <Redirect to="/Test" />}
        <form onSubmit={this.handleSubmit} method="post">
          <input
            type="text"
            onChange={this.handleInput}
            name="first_name"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={this.handleInput}
            name="last_name"
            placeholder="Last Name"
          />
          <select name="user_role" id="">
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="0">Student</option>
            <option value="1">Mentor</option>
          </select>
          <input
            type="email"
            onChange={this.handleInput}
            name="email"
            placeholder="Email address"
          />
          <input
            type="password"
            onChange={this.handleInput}
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            onChange={this.handleInput}
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}
