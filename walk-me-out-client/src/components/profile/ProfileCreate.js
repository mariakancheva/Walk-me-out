import React, { Component } from 'react'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { redirectAction } from '../../store/actions/authActions'
import { createProfileAction } from '../../store/actions/profileActions'
import { profileValidation } from '../../utils/profileValidation'
import { profileValidationFunction} from '../../utils/formValidation'
import { Input } from '@material-ui/core';

class createProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            telephone: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.createProfileError.hasError) {
            toastr.error(nextProps.createProfileError.message)
        } else if (nextProps.createProfileSuccess) {
            this.props.redirect();
            toastr.success('Profile created successfully')
            this.props.history.push('/profile')
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!profileValidation(this.state.firstName, this.state.lastName, this.state.address, this.state.telephone)) {
            return
        }
        this.props.createProfile(this.state.firstName, this.state.lastName, this.state.address, this.state.telephone)
    }

    render() {
        let validObj = profileValidationFunction(
            this.state.firstName,
            this.state.lastName,
            this.state.address,
            this.state.telephone
        )

        return (
            <div className="profile-home">

                <h2> Create your profile</h2>

                <form onSubmit={this.onSubmit}>
                    <Input
                        type='text'
                        name='firstName'
                        label='First Name'
                        placeholder='Enter your first name'
                        value={this.state.firstName}
                        onChange={this.onChange}
                        valid={validObj.validFirstName}
                    />
                    <Input
                        type='text'
                        name='lastName'
                        label='Last Name'
                        placeholder='Enter your last name'
                        value={this.state.lastName}
                        onChange={this.onChange}
                        valid={validObj.validLastName}
                    />
                    <Input
                        type='text'
                        name='address'
                        label='Address'
                        placeholder='Enter your address'
                        value={this.state.address}
                        onChange={this.onChange}
                        valid={validObj.validAddress}
                    />
                    <Input
                        type='text'
                        name='telephone'
                        label='Telephone number'
                        placeholder='Enter your number'
                        value={this.state.telephone}
                        onChange={this.onChange}
                        valid={validObj.validTelephone}
                    />
                 <button type= "Submit"> Submit</button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        createProfileSuccess:state.createProfile.success,
        createProfileError:state.createProfileError
    }
}

function mapDispatchToProps (dispatch){
    return{
        createProfile:(firstName,lastName,address,telephone) => {
            dispatch(createProfileAction({firstName,lastName,address,telephone}))
        },
        redirect: () => dispatch(redirectAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(createProfile));