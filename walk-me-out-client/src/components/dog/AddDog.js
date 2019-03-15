import React, { Component } from 'react'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { redirectAction } from '../../store/actions/authActions'
import { createDogAction } from '../../store/actions/dogActions'
import { dogValidation } from '../../utils/dogValidation'
import { dogValidationFunction} from '../../utils/formValidation'
import { Input, Select, MenuItem,InputLabel,FormControl } from '@material-ui/core';

class createDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            breed: '',
            age: 0,
            weight: 0,
            castration: '',
            desease: '',
            character: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.createDogError.hasError) {
            toastr.error(nextProps.createDogError.message)
        } else if (nextProps.createDogSuccess) {
            this.props.redirect();
            toastr.success('Dog added successfully')
            this.props.history.push('/dog/create')
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!dogValidation(this.state.name, this.state.breed, this.state.age, this.state.weight)) {
            return
        }
        this.props.createDog(this.state.name, this.state.breed, this.state.age, this.state.weight, this.state.castration, this.state.desease, this.state.character)
    }

    render() {
        let validObj = dogValidationFunction(
            this.state.name,
            this.state.breed,
            this.state.age,
            this.state.weight
        )

        return (
            <div className="profile-home">

                <h2> Add your pet</h2>

                <form onSubmit={this.onSubmit}>
                    <Input
                        type='text'
                        name='name'
                        label='Pet name'
                        placeholder='Enter your pet name'
                        value={this.state.name}
                        onChange={this.onChange}
                        valid={validObj.validName}
                    />
                    <Input
                        type='text'
                        name='breed'
                        label='Breed'
                        placeholder='Enter your pet breed'
                        value={this.state.breed}
                        onChange={this.onChange}
                        valid={validObj.validBreed}
                    />
                    <Input
                        type='number'
                        name='age'
                        label='Pet age'
                        placeholder='Enter your pet age'
                        value={this.state.age}
                        onChange={this.onChange}
                        valid={validObj.validAge}
                    />
                    <Input
                        type='number'
                        name='weight'
                        label='Weight'
                        placeholder='Enter your pet weight'
                        value={this.state.weight}
                        onChange={this.onChange}
                        valid={validObj.validWeight}
                    />

                    <FormControl className="">
                        <InputLabel shrink htmlFor="castration-label-placeholder">
                            Castration
                        </InputLabel>
                        <Select
                            value={this.state.castration}
                            onChange={this.handleChange}
                            input={<Input name="castration" id="castration-label-placeholder" />}
                            displayEmpty
                            name="castration"
                            className=""
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={this.state.castration}>Yes</MenuItem>
                            <MenuItem value={this.state.castration}>No</MenuItem>
                        </Select>
                    </FormControl>

                    <Input
                        type='text'
                        name='desease'
                        label='Desease'
                        placeholder='Enter if your dog have any haelth issues'
                        value={this.state.desease}
                        onChange={this.onChange}
                    />

                    <FormControl className="">
                        <InputLabel shrink htmlFor="character-label-placeholder">
                            Character
                        </InputLabel>
                        <Select
                            value={this.state.character}
                            onChange={this.handleChange}
                            input={<Input name="character" id="character-label-placeholder" />}
                            displayEmpty
                            name="character"
                            className=""
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={this.state.character}>Can walk on group</MenuItem>
                            <MenuItem value={this.state.character}>Have to walk alone</MenuItem>
                        </Select>
                    </FormControl>

                 <button type= "Submit"> Submit</button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        createDogSuccess: state.createDog.success,
        createDogError: state.createDogError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createDog: (name, breed, age, weight, castration,desease,character) => {
            dispatch(createDogAction({ name, breed, age, weight, castration,desease,character }))
        },
        redirect: () => dispatch(redirectAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(createDog));