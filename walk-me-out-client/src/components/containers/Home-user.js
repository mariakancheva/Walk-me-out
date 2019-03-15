import React, { Component, Fragment } from 'react'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { } from '../../store/actions/authActions'

class HomeUser extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <h2> Wellcome to <strong>Walk me out system!</strong></h2>

                <p>
                    You have to <Link to="/profile/create">create profile</Link>,
                to <Link to="/dog/create">give us</Link> an information about your dog
                and we will be glad to <Link to="/walk/create"> walk you dog out!</Link>
                </p>
            </Fragment>

        )
    }
}

export default HomeUser