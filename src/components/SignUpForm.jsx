import React, { Component } from "react";
import axios from "axios";
export default class SignUpForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };
  //   componentDidMount() {
  //     axios.get("192.168.1.117:3000/mentors/signup").then(res => {
  //       console.log(res);
  //       this.setState({
  //         first_name: res.data.name
  //       });
  //     });
  //   }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const data = {
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    //   email: this.state.email,
    //   password: this.state.password
    // };
    axios
      .post("http://192.168.1.125:3000/mentors/signup", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
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
