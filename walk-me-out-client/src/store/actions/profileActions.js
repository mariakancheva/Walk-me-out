import {FETCH_DATA_SUCCESS,CREATE_PROFILE_SUCCESS,CREATE_PROFILE_ERROR,EDIT_PROFILE_SUCCESS,EDIT_PROFILE_ERROR,DELETE_PROFILE} from './actionTypes'
import {beginAjax,endAjax} from './ajaxStatusActions'
import errorHandler from '../../utils/errorHandler'
import {fetchProfiles,createProfile,editProfile,deleteProfile} from '../../api/remote'

function fetchDataSuccess (data){
    return {
        type:FETCH_DATA_SUCCESS,
        data
    }
}

function createSuccess(data){
    return {
        type:CREATE_PROFILE_SUCCESS,
        data
    }
}

function createError(error){
    return {
        type:CREATE_PROFILE_ERROR,
        error
    }
}

function editSuccess(data){
    return {
        type:EDIT_PROFILE_SUCCESS,
        data
    }
}

function editError(error){
    return {
        type:EDIT_PROFILE_ERROR,
        error
    }
}

function deleteSuccsess (id){
    return {
        type: DELETE_PROFILE,
        id

    }
}

function fetchProfilesAction(){
    return async (dispatch) => {
        dispatch (beginAjax())
        const data = await fetchProfiles()
        dispatch(fetchDataSuccess(data))
        dispatch(endAjax())
    }
}

function createProfileAction(data){
    return (dispatch) => {
        dispatch(beginAjax())
        return createProfile(data)
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

function editProfileAction (id,data){
    return (dispatch) => {
        dispatch(beginAjax())
        return editProfile(id,data).then(json => {
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

function deleteProfileAction (id){
    return (dispatch) => {
        return deleteProfile(id).then(json => {
            if (json.success){
                dispatch(deleteSuccsess(id))
            }
        })
    }
}

export {
    fetchProfilesAction,
    createProfileAction,
    editProfileAction,
    deleteProfileAction
}