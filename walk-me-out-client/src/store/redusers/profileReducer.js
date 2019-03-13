import { FETCH_DATA_SUCCESS, CREATE_PROFILE_SUCCESS, CREATE_PROFILE_ERROR, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_ERROR, REDIRECTED, DELETE_PROFILE } from '../actions/actionTypes'


function profileReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return reconcile(state, action.data)
        case CREATE_PROFILE_SUCCESS:
            return reconcile(state, [action.data])
        case EDIT_PROFILE_SUCCESS:
            return reconcile(state, [action.data])
        case DELETE_PROFILE:
            return state.filter(e => e._id !== action.id)
        default:
            return state
    }
}

function createProfileReducer(state = { succsess: false }, action) {
    switch (action.type) {
        case CREATE_PROFILE_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state;
    }
}

function createProfileErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case CREATE_PROFILE_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case CREATE_PROFILE_SUCCESS:
            return Object.assign({}, { hasError: false, message: '' })
        default:
            return state
    }
}

function editProfileReduser(state = { succsess: false }, action) {
    switch (action.type) {
        case EDIT_PROFILE_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state
    }
}

function editProfileErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case EDIT_PROFILE_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case EDIT_PROFILE_SUCCESS:
            return Object.assign({}, { hasError: false, message: '' })
        default:
            return state
    }
}

function reconcile(oldData, newData) {
    const newDataById = {}
    for (const entry of newData) {
        newDataById[entry._id] = entry
    }

    const result = []
    for (const entry of oldData) {
        if (newDataById[entry._id]) {
            result.push(newDataById[entry._id])
            delete newDataById[entry._id]
        }else{
            result.push(entry)
        }
    }

    for (const entryId in newDataById) {
       result.push(newDataById[entryId])
    }

    return result
}

export{
    profileReducer,
    createProfileReducer,
    createProfileErrorReducer,
    editProfileReduser,
    editProfileErrorReducer
}