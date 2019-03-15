import React, { Component, Fragment } from 'react'
import toastr from 'toastr'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {} from '../../store/actions/authActions'

class Profile extends Component{
    constructor(props){
        super(props)
    }


    render(){
        let allUsers = this.props.users;
        let allDogs = this.props.dogs;
        let allWalks = this.props.walks;

        return(
            <Fragment>
            <section className="users">

            </section>

            <section className="dogs">

            </section>
            <section className="walks">

            </section>   
            </Fragment>

        )
    }
}

export default Profile;