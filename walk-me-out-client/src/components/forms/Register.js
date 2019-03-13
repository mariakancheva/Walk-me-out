import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Button } from "react-bootstrap";
import RegisterPicture from '../../images/pat-kay-1380641-unsplash.jpg'
import '../../css/register.css'

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

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        console.log(newUser);
    }

    render() {
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
                        />

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

                        <TextField
                            required
                            id="repPass"
                            label="Repeate Password"
                            type="password"
                            name="repeatePassword"
                            margin="normal"
                            onChange={this.handleChange}
                        />

                        <br/>
                        <Button type="submit">Register</Button>
                            
                    </form>
                </div>

            </section>
        )
    }
}

export default Register;