import React, { Component } from 'react'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { redirectAction } from '../../store/actions/authActions'
import { createWalkAction } from '../../store/actions/walkActions'
import { walkValidationFunction} from '../../utils/formValidation'
import { walkValidation } from '../../utils/walkValidation'
import { Input, Select, FormControl,InputLabel,MenuItem } from '@material-ui/core';


class createWalk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: '',
            place: '',
            date: '',
            time: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.createWalkSuccseee.hasError) {
            toastr.error(nextProps.createWalkError.message)
        } else if (nextProps.createWalkSuccess) {
            this.props.redirect();
            toastr.success('Walk ordered successfully')
            this.props.history.push('/walk/create')
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!walkValidation(this.state.date, this.state.time)) {
            return
        }
        this.props.createWalk(this.state.duration, this.state.place, this.state.date, this.state.time)
    }

    render() {
        let validObj = walkValidationFunction(
            this.state.date,
            this.state.time
        )

        return (
            <div className="profile-home">

                <h2> Walk me out!</h2>

                <form onSubmit={this.onSubmit}>
                    <FormControl className="">
                        <InputLabel shrink htmlFor="duration-label-placeholder">
                            Duration
                        </InputLabel>
                        <Select
                            value={this.state.duration}
                            onChange={this.handleChange}
                            input={<Input name="duration" id="duration-label-placeholder" />}
                            displayEmpty
                            name="duration"
                            className=""
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={this.state.duration}>Half hour</MenuItem>
                            <MenuItem value={this.state.duration}>Hour</MenuItem>
                            <MenuItem value={this.state.duration}>Hour and half </MenuItem>
                            <MenuItem value={this.state.duration}>Two hours</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className="">
                        <InputLabel shrink htmlFor="place-label-placeholder">
                            Place
                        </InputLabel>
                        <Select
                            value={this.state.place}
                            onChange={this.handleChange}
                            input={<Input name="place" id="place-label-placeholder" />}
                            displayEmpty
                            name="place"
                            className=""
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={this.state.place}>Walk me on the beach!</MenuItem>
                            <MenuItem value={this.state.place}>Have to go to the park!</MenuItem>
                            <MenuItem value={this.state.place}>I love to go anywhere!</MenuItem>
                        </Select>

                    </FormControl>

                    <Input
                        type='date'
                        name='date'
                        label='Pick date'
                        placeholder='Date'
                        value={this.state.date}
                        onChange={this.onChange}
                        valid={validObj.validDate}
                    />
                    <Input
                        type='text'
                        name='time'
                        label='Pick a time'
                        placeholder='Pick a time'
                        value={this.state.name}
                        onChange={this.onChange}
                        valid={validObj.validTime}
                    />


                 <button type= "Submit"> Submit</button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        createWalkSuccess: state.createWalk.success,
        createWalkError: state.createWalkError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createWalk: (duration, place, date, time) => {
            dispatch(createWalkAction({ duration, place, date, time }))
        },
        redirect: () => dispatch(redirectAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(createWalk));