import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {logoutAction } from './store/actions/authActions';
import toastr from 'toastr';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from "./components/containers/Home";
import About from "./components/containers/About";
import Services from "./components/containers/Services";
import Contact from "./components/containers/Contact";
import NotFound from './components/containers/NotFound';

import Login from "./components/forms/Login"
import Register from "./components/forms/Register"
import HomeAdmin from './components/containers/Home-admin';
import HomeUser from './components/containers/Home-user';

import ProfileCreate from './components/profile/ProfileCreate'
import ProfileEdit from './components/profile/ProfileEdit'
import DogCreate from './components/dog/AddDog'
import DogEdit from './components/dog/EditDog'
import WalkCreate from './components/walk/CreateWalk';
import WalkEdit from './components/walk/EditWalk'

import PrivateRoute from './components/routes/PrivateRoute';
import AdminRoute from './components/routes/AdminRoute';
import './css/App.css';
import Auth from './utils/auth';
import { fetchProfilesAction } from './store/actions/profileActions';
import { fetchDogsAction } from './store/actions/dogActions';
import {fetchWalksAction} from './store/actions/walkActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({ loggedIn: true })
    }   
    
    this.props.fetchProfiles()
    this.props.fetchDogs()
    this.props.fetchWalks()

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess) {
      this.setState({ loggedIn: true })
    }
 
  }

  logout() {
    this.setState({ loggedIn: false })
    this.props.logout()
    toastr.success('Logout successful')
    this.props.history.push('/login')
  }

  render() {
    const isAdmin = Auth.isUserAdmin()

    return (

      <div className="App">
        <Header
          loggedIn={this.state.loggedIn}
          isAdmin={isAdmin}
          logout={this.logout}
        />
     
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <AdminRoute path="/admin" component={HomeAdmin} />

            <PrivateRoute path="/user" component={HomeUser}/>
            
            <PrivateRoute path="/user/profile/create" component={ProfileCreate}/>
            <PrivateRoute path="/user/profile/edit/id" component={ProfileEdit}/>
            <PrivateRoute path="/user/dog/create" component={DogCreate}/>
            <PrivateRoute path="/user/dog/edit/:id" component={DogEdit}/>
            <PrivateRoute path="/walk/create" component={WalkCreate}/>
            <PrivateRoute path="/walk/edit" component={WalkEdit}/> 

            <Route component={NotFound} />

          </Switch>
        </main>
        <Footer />
      </div>

    );
  }
}

function mapStateToProps (state){
  return {
    loginSuccess: state.login.success
  }
}

function mapDispatchToProps (dispatch){
  return {
    logout: () => dispatch(logoutAction()),
    fetchProfiles: () => dispatch(fetchProfilesAction()),
    fetchDogs: () => dispatch(fetchDogsAction()),
    fetchWalks: () => dispatch(fetchWalksAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
