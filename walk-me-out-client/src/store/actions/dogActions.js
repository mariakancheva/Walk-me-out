import {FETCH_DATA_SUCCESS,CREATE_DOG_SUCCESS,CREATE_DOG_ERROR,EDIT_DOG_SUCCESS,EDIT_DOG_ERROR,DELETE_DOG} from './actionTypes'
import {beginAjax,endAjax} from './ajaxStatusActions'
import errorHandler from '../../utils/errorHandler'
import {fetchDogs,addDog,editDog,deleteDog} from '../../api/remote'

function fetchDataSuccess (data){
    return {
        type:FETCH_DATA_SUCCESS,
        data
    }
}

function createSuccess(data){
    return {
        type:CREATE_DOG_SUCCESS,
        data
    }
}

function createError(error){
    return {
        type:CREATE_DOG_ERROR,
        error
    }
}

function editSuccess(data){
    return {
        type:EDIT_DOG_SUCCESS,
        data
    }
}

function editError(error){
    return {
        type:EDIT_DOG_ERROR,
        error
    }
}

function deleteSuccsess (id){
    return {
        type: DELETE_DOG,
        id

    }
}

function fetchDogsAction(){
    return async (dispatch) => {
        dispatch (beginAjax())
        const data = await fetchDogs()
        dispatch(fetchDataSuccess(data))
        dispatch(endAjax())
    }
}

function addDogAction(data){
    return (dispatch) => {
        dispatch(beginAjax())
        return addDog(data)
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

function editDogAction (id,data){
    return (dispatch) => {
        dispatch(beginAjax())
        return editDog(id,data).then(json => {
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

function deleteDogAction (id){
    return (dispatch) => {
        return deleteDog(id).then(json => {
            if (json.success){
                dispatch(deleteSuccsess(id))
            }
        })
    }
}

export {
    fetchDogsAction,
    addDogAction,
    editDogAction,
    deleteDogAction
}