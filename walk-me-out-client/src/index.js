import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/toastr/build/toastr.min.css'

import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reducers from './store/redusers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk, createLogger))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
