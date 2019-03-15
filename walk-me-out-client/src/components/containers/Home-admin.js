import React, { Component, Fragment } from 'react'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Auth from '../../utils/auth'
import { fetchProfilesAction } from '../../store/actions/profileActions';
import { fetchDogsAction } from '../../store/actions/dogActions';
import { fetchWalksAction } from '../../store/actions/walkActions'
import ProfileCard from '../profile/ProfileCard'


class HomeAdmin extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (Auth.isUserAuthenticated()) {
            this.setState({ loggedIn: true })
        }

        this.props.fetchProfiles()
        this.props.fetchDogs()
        this.props.fetchWalks()
    }


    render() {
        const isAdmin = Auth.isUserAdmin()
        let allUsers = this.props.profiles;
        let allDogs = this.props.dogs;
        let allWalks = this.props.walks;

        let profilesList = allUsers.map(p => <ProfileCard
            key={p.id}
            id={p._id}
            firstName={p.firstName}
            lastName={p.lastName}
            address={p.address}
            telephone={p.telephone}
        />)

        return (
            <Fragment>
                <section className="users">
                    {profilesList}
                </section>

                <section className="dogs">

                </section>
                <section className="walks">

                </section>
            </Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles,
        dogs: state.dogs,
        walks: state.walks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProfiles: () => dispatch(fetchProfilesAction()),
        fetchDogs: () => dispatch(fetchDogsAction()),
        fetchWalks: () => dispatch(fetchWalksAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeAdmin));
