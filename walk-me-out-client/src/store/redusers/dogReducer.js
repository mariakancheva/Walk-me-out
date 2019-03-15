import { FETCH_DATA_SUCCESS, CREATE_DOG_SUCCESS, CREATE_DOG_ERROR, EDIT_DOG_SUCCESS, EDIT_DOG_ERROR, REDIRECTED, DELETE_DOG } from '../actions/actionTypes'


function dogReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return reconcile(state, action.data)
        case CREATE_DOG_SUCCESS:
            return reconcile(state, [action.data])
        case EDIT_DOG_SUCCESS:
            return reconcile(state, [action.data])
        case DELETE_DOG:
            return state.filter(e => e._id !== action.id)
        default:
            return state
    }
}

function createDogReducer(state = { succsess: false }, action) {
    switch (action.type) {
        case CREATE_DOG_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state;
    }
}

function createDogErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case CREATE_DOG_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case CREATE_DOG_SUCCESS:
            return Object.assign({}, { hasError: false, message: '' })
        default:
            return state
    }
}

function editDogReducer(state = { succsess: false }, action) {
    switch (action.type) {
        case EDIT_DOG_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state
    }
}

function editDogErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case EDIT_DOG_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case EDIT_DOG_SUCCESS:
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
    dogReducer,
    createDogReducer,
    createDogErrorReducer,
    editDogReducer,
    editDogErrorReducer
}