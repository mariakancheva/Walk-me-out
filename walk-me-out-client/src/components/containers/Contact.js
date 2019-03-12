import React, { Component } from 'react';
import '../../css/home.css';

class Contact extends Component {
    render() {
        return (

            <div className="home">

                <section className="contact">
                    <h2>Contact</h2>
                    <hr />
                    <div className="box">
                        <form>
                            <div className="fields">
                                <div className="field half">
                                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
                                </div>
                                <div className="field half">
                                    <input type="email" name="email" placeholder="Email" onChange={this.onChange} />
                                </div>
                                <div className="field">
                                    <textarea name="message" placeholder="Message" rows="6" onChange={this.onChange} />
                                </div>
                                <div className="field">
                                    <button className="btn" onSubmit={this.onSubmit}>Send message</button>
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