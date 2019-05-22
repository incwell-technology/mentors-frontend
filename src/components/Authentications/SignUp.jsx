import React, { Component } from "react";
import axios from "axios";
export default class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://192.168.1.125:3000/mentors/signup",
        this.state
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
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
    );
  }
}
