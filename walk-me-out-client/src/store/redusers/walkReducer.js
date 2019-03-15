import { FETCH_DATA_SUCCESS, CREATE_WALK_SUCCESS, CREATE_WALK_ERROR, EDIT_WALK_SUCCESS, EDIT_WALK_ERROR, REDIRECTED, DELETE_WALK } from '../actions/actionTypes'


function walkReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return reconcile(state, action.data)
        case CREATE_WALK_SUCCESS:
            return reconcile(state, [action.data])
        case EDIT_WALK_SUCCESS:
            return reconcile(state, [action.data])
        case DELETE_WALK:
            return state.filter(e => e._id !== action.id)
        default:
            return state
    }
}

function createWalkReducer(state = { succsess: false }, action) {
    switch (action.type) {
        case CREATE_WALK_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state;
    }
}

function createWalkErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case CREATE_WALK_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case CREATE_WALK_SUCCESS:
            return Object.assign({}, { hasError: false, message: '' })
        default:
            return state
    }
}

function editWalkReducer(state = { succsess: false }, action) {
    switch (action.type) {
        case EDIT_WALK_SUCCESS:
            return Object.assign({}, state, { succsess: true })
        case REDIRECTED:
            return Object.assign({}, state, { succsess: false })
        default:
            return state
    }
}

function editWalkErrorReducer(state = { hasError: false, message: '' }, action) {
    switch (action.type) {
        case EDIT_WALK_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        case EDIT_WALK_SUCCESS:
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
    walkReducer,
    createWalkErrorReducer,
    createWalkReducer,
    editWalkErrorReducer,
    editWalkReducer
}