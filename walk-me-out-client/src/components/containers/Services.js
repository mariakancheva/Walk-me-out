import React, { Component } from 'react';
import '../../css/home.css';

class Services extends Component {
    render() {
        return (
            <div className="home">

                <section className="services">

                    <h2>Services</h2>
                    <hr />

                    <div className="cards">

                        <div className="card">
                            <div className="card-footer">
                                <i className="fas fa-dog"></i>
                            </div>
                            <div className="card-header">
                                <h4>Walk me out!</h4>
                            </div>
                            <div className="card-body">
                                <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.
                            </p>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Kennel me!
                    </h4>
                            </div>
                            <div className="card-body">
                                <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.
                            </p>
                            </div>
                            <div className="card-footer">
                                <i className="fas fa-home"></i>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-footer">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <div className="card-header">
                                <h4> Be with me!</h4>
                            </div>
                            <div className="card-body">
                                <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.
                            </p>
                            </div>

                        </div>

                    </div>


                </section>

            </div >
        )
    }
}

export default Services;