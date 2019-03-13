import React, { Component } from "react";
import loginValidator from '../../utils/loginValidation';
import Auth from '../../utils/auth';
import {loginValidationFunc} from '../../utils/formValidation';


import toastr from 'toastr';
import { Button } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import LoginPicture from '../../images/pawel-czerwinski-1404601-unsplash.jpg'
import "../../css/register.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const userLog = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userLog)
  }

  render() {
    return (
      <section className="register">
        <div className="img-part">
          <img src={LoginPicture} alt="Login picture"></img>
        </div>
        <div className="form-part">
          <form onSubmit={this.handleSubmit}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              name="email"
              margin="normal"
              onChange={this.handleChange}
            />

            <TextField
              required
              id="password"
              name="password"
              label="Password"
              className=""
              type="password"
              margin="normal"
              onChange={this.handleChange}
            />

            <Button type="submit">Login</Button>
          </form>
        </div>
      </section >
    );
  }
}
