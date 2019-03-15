import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Button } from "react-bootstrap";
import RegisterPicture from '../../images/pat-kay-1380641-unsplash.jpg'
import '../../css/register.css'
import Auth from '../../utils/auth';
import {registerValidationFunc} from '../../utils/formValidation';
import registerValidation from "../../utils/registerValidation";
import toastr from 'toastr';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {registerAction,loginAction,redirectAction} from '../../store/actions/authActions'


class Register extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        username: '',
        email: '',
        password: '',
        repeatePassword:''
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

    }

    componentWillMount(){
        if(Auth.isUserAuthenticated()){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.registerError.hasError){
            toastr.error(nextProps.registerError.message)
        }else if(nextProps.registerSuccess){
            this.props.login(this.state.email, this.state.password)
        }else if(nextProps.loginSuccess){
            this.props.redirect()
            toastr.success('Registration successful')
            this.props.history.push('/')
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if(!registerValidation(this.state.username,this.state.email,this.state.password, this.state.repeatePassword)){
            return
        }

        this.props.register(this.state.username, this.state.email,this.state.password)
    }

    render() {
        let validObj= registerValidationFunc(
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.repeatePassword
        )

        return (
            <section className="register">
                <div className="img-part">
                    <img src={RegisterPicture} alt="Register picture"></img>
                </div>
                <div className="form-part">
                    <form onSubmit={this.handleSubmit}>

                        <TextField
                            required
                            id="standard-name"
                            label="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            margin="normal"
                            valid={validObj.validPassword}
                        />

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

                        <TextField
                            required
                            id="repPass"
                            label="Repeate Password"
                            type="password"
                            name="repeatePassword"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.repeatePassword}
                            valid={validObj.validConfirmPassword}

                        />

                        <br/>
                        <Button type="submit">Register</Button>
                            
                    </form>
                </div>

            </section>
        )
    }
}

function mapStateToProps (state) {
    return {
      registerSuccess: state.register.success,
      loginSuccess: state.login.success,
      registerError: state.registerError
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      register: (username, email, password) => dispatch(registerAction(username, email, password)),
      login: (email, password) => dispatch(loginAction(email, password)),
      redirect: () => dispatch(redirectAction())
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))