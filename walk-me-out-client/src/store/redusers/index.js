import ajaxStatusReduser from './ajaxStatusReduser'
import {registerReduser, loginReduser, registerErrorReduser, loginErrorReduser} from './authReducer'
import {createProfileReducer,createProfileErrorReducer,editProfileReduser,editProfileErrorReducer,profileReducer} from './profileReducer'
import { dogReducer,createDogReducer,createDogErrorReducer,editDogReduser,editDogErrorReducer} from './dogReducer'
import { walkReducer,createWalkReducer,createWalkErrorReducer,editWalkReduser,editWalkErrorReducer} from './walkReducer'

export default {
    ajaxCalls:ajaxStatusReduser,
    register:registerReduser,
    login:loginReduser,
    registerError:registerErrorReduser,
    loginError:loginErrorReduser,
    profile:profileReducer,
    createProfile:createProfileReducer,
    createProfileError:createProfileErrorReducer,
    editProfile:editProfileReduser,
    editProfileError:editProfileErrorReducer,
    dog:dogReducer,
    createDog:createDogReducer,
    createDogError:createDogErrorReducer,
    editDog:editDogReduser,
    editDogError:editDogErrorReducer,
    walk:walkReducer,
    createWalk:createWalkReducer,
    createWalkError:createWalkErrorReducer,
    editWalk:editWalkReduser,
    editWalkError:editWalkErrorReducer

}