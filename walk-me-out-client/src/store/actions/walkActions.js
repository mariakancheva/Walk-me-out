import {FETCH_DATA_SUCCESS,CREATE_WALK_SUCCESS,CREATE_WALK_ERROR,EDIT_WALK_SUCCESS,EDIT_WALK_ERROR,DELETE_WALK} from './actionTypes'
import {beginAjax,endAjax} from './ajaxStatusActions'
import errorHandler from '../../utils/errorHandler'
import {fetchWalks,createWalk,editWalk,deleteWalk} from '../../api/remote'

function fetchDataSuccess (data){
    return {
        type:FETCH_DATA_SUCCESS,
        data
    }
}

function createSuccess(data){
    return {
        type:CREATE_WALK_SUCCESS,
        data
    }
}

function createError(error){
    return {
        type:CREATE_WALK_ERROR,
        error
    }
}

function editSuccess(data){
    return {
        type:EDIT_WALK_SUCCESS,
        data
    }
}

function editError(error){
    return {
        type:EDIT_WALK_ERROR,
        error
    }
}

function deleteSuccsess (id){
    return {
        type: DELETE_WALK,
        id

    }
}

function fetchWalksAction(){
    return async (dispatch) => {
        dispatch (beginAjax())
        const data = await fetchWalks()
        dispatch(fetchDataSuccess(data))
        dispatch(endAjax())
    }
}

function createWalkAction(data){
    return (dispatch) => {
        dispatch(beginAjax())
        return createWalk(data)
        .then(json => {
            if(json.success){
                dispatch(createSuccess(json.data))
            }else{
                const error = errorHandler(json)
                dispatch(createError(error))
            }
            dispatch(endAjax())
        })
    }
}

function editWalkAction (id,data){
    return (dispatch) => {
        dispatch(beginAjax())
        return editWalk(id,data).then(json => {
            if(json.success){
                dispatch(editSuccess(json.data))
            }else{
                const error = errorHandler(json)
                dispatch(editError(editError))
            }
            dispatch(endAjax())
        })
    }
}

function deleteWalkAction (id){
    return (dispatch) => {
        return deleteWalk(id).then(json => {
            if (json.success){
                dispatch(deleteSuccsess(id))
            }
        })
    }
}

export {
    fetchWalksAction,
    createWalkAction,
    editWalkAction,
    deleteWalkAction
}