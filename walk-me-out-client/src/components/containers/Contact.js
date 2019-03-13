import React, { Component } from 'react';
import '../../css/home.css';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmitHandle = this.onSubmit.bind(this);
    }

    onChange= (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit= (e) => {
        e.preventDefault();

        const contactMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        console.log(contactMessage)
    }
    render() {
        
        return (

            <div className="home">

                <section className="contact">
                    <h2>Contact</h2>
                    <hr />
                    <div className="box">
                        <form onSubmit={this.onSubmit}>
                            <div className="fields">
                                <div className="field half">
                                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
                                </div>
                                <div className="field half">
                                    <input type="email" name="email" placeholder="Email" onChange={this.onChange}  />
                                </div>
                                <div className="field">
                                    <textarea name="message" placeholder="Message" rows="6" onChange={this.onChange} />
                                </div>
                                <div className="field">
                                    <button className="btn">Send message</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </section>
            </div >
        )
    }
}

export default Contact;