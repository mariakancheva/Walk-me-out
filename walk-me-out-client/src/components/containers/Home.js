import React, { Component } from 'react';
import '../../css/home.css'
import Stuard from '../../images/stewartrunning-2.jpg'

class Home extends Component {
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDeafault();

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
                <section className="wellcome-message">
                    <img src={Stuard} alt="Running dog"></img>
                    <div className="text-part">
                        <h2>Walk me out!</h2>
                        <p> Your dog will love our walk!</p>
                    </div>

                </section>

                <section className="aboutUs">
                    <h2>We are</h2>
                    <hr />
                    <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies. Bird Food treats tongue lick teeth ferret litter box slobbery litter box crate bird small animals yawn small animals shake slobber gimme five toys polydactyl meow. Turtle cage lazy cat foot lazy cat groom canary window tooth brush bedding lazy cat pet supplies turtle water dog shake pet supplies kitty. Walk bird harness wet nose meow harness grooming water dog lol catz water bedding toys bird seed fetch lazy cat. Parakeet scratcher brush biscuit lick dog tooth walk food lazy cat biscuit. Cockatiel Snowball kitten Rover ferret puppy.</p>
                    <p>Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park. Dinnertime fetch throw feathers fleas tongue lazy cat lick throw kitten parrot hamster wag tail aquarium chew heel good boy lick feathers cockatiel. Wet Nose food ferret vaccine finch vaccination Scooby snacks string wagging barky tail head good boy pet gate meow good boy. Commands shake bird biscuit left paw finch bark ferret bark gimme five turtle fur canary. Water puppy dog lick kisses pet supplies slobber cat bird seed. Food sit biscuit groom tongue cage.</p>
                    <p>Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.</p>
                </section>

                <section className="services">

                    <h2>Services</h2>
                    <hr />

                    <div className="cards">

                        <div className="card">
                            <div className="card-header">
                                <h4>Walk me out!</h4>
                            </div>
                            <div className="card-body">
                                <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.
                                </p>
                            </div>
                            <div className="card-footer">
                                <i class="fas fa-dog"></i>
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
                                <i class="fas fa-home"></i>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h4> Be with me!</h4>
                            </div>
                            <div className="card-body">
                                <p> Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.
                                </p>
                            </div>
                            <div className="card-footer">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                        </div>

                    </div>


                </section>

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

export default Home;