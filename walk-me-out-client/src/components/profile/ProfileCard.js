import React, { Component } from 'react';
import Auth from '../../utils/auth';
import { deleteProfileAction } from '../../store/actions/profileActions';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class ProfileCard extends Component {
    constructor(props){
        super(props)

        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this)
    }

    onDeleteButtonClick (e){
        if(Auth.isUserAdmin()){
            this.props.deleteProfile(this.props.id)
        }
    }
    render(){
        const {firstName, lastName, address, telephone } = this.props

    return (
        <div className="card">
        <div className="card-header">
        <h5>{firstName} {lastName}</h5>
        </div>
        <div className="card-body">
        <span> <i className="far fa-address-book"></i> {address} </span>
        <span> <i className="fas fa-mobile-alt"></i> {telephone}</span>
        </div>
        <div className="card-footer">
        <button onClick={this.onDeleteButtonClick} className="small">Delete</button>
        </div>
        </div>
    )
    }
    
}

function mapDispatchToprops(dispatch){
    return{
        deleteProfile:(id) => dispatch(deleteProfileAction(id))
    }
}

export default withRouter(connect(() => {return{}}, mapDispatchToprops)(ProfileCard))