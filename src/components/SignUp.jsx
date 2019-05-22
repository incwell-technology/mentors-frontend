import React, { Component } from "react";
import mentors from "../images/mentor.jpg";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
export default class SignUp extends Component {
  tabHandler = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  componentDidMount() {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
  }
  render() {
    return (
      <div className="background">
        <div className="box">
          <div className="container">
            <div className="column1">
              <img src={mentors} />
            </div>
            <div className="column2">
              <div className="tab">
                <button
                  className="tablinks"
                  onClick={e => this.tabHandler(e, "Login")}
                  id="defaultOpen"
                >
                  <b>Login</b>
                </button>
                <button
                  className="tablinks"
                  onClick={e => this.tabHandler(e, "Signup")}
                >
                  <b>Signup</b>
                </button>
              </div>
              <div id="Login" className="tabcontent">
                <div>
                  <Login />
                </div>
                <div className="signup">
                  <p>or</p>
                  <ul>
                    <p>Sign in with</p>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
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
