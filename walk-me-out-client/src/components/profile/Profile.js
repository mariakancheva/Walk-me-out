import React, { Component } from 'react'
import Auth from '../../utils/auth'
import { connect } from 'react-redux'
import { profileAction } from '../../store/actions'
import NotFound from '../containers/NotFound';
import ProfileCard from './ProfileCard';

class Profile extends Component{
    render(){
        const userId = Auth.getUserId();
        const profile = this.props.profiles.find(p => p._id===userId);

        if(!user){
            return (<NotFound errMessage='Profile not found'/>)
        }

        return (
            <div className="container">
           
            <h4>Your profile details</h4>
      
            <ProfileCard
            profile={profile}
            deleteProfile={this.props.deleteProfile()}
            />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        profiles:state.profiles
    }
}

function mapDispatchToProps (dispatch){
    return {
        deleteProfile:(id) => dispatch(deleteProfile(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)