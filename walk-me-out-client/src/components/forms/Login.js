import React, { Component } from "react";
import { Button } from "react-bootstrap";
import toastr from 'toastr';
import Auth from '../../utils/auth';
import { loginValidationFunc } from '../../utils/formValidation';
import loginValidation from "../../utils/loginValidation";
import TextField from '@material-ui/core/TextField';
import LoginPicture from '../../images/pawel-czerwinski-1404601-unsplash.jpg'
import "../../css/register.css";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginAction, redirectAction } from '../../store/actions/authActions'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (Auth.isUserAdmin()) {

      this.props.history.push('/admin')
    } else if (Auth.isUserAuthenticated()) {
      this.props.history.push('/user')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginError.hasError) {
      toastr.error(nextProps.loginError.message)
    } else if (nextProps.loginSuccess) {
      this.props.redirect()
      toastr.success('Login successful')
      if (!this.props.isAdmin) {
        this.props.history.push('/user')
      } else {
        this.props.history.push('/admin')
      }

    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!loginValidation(this.state.email, this.state.password)) {
      return
    }

    this.props.login(this.state.email, this.state.password)

  }

  render() {
    let validObj = loginValidationFunc(
      this.state.email,
      this.state.password
    )

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
              value={this.state.email}
              valid={validObj.validEmail}
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
              value={this.state.password}
              valid={validObj.validPassword}
            />

            <Button type="submit">Login</Button>
          </form>
        </div>
      </section >
    );
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    loginError: state.loginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))