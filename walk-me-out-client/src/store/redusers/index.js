import ajaxStatusReducer from './ajaxStatusReducer'
import {registerReducer, loginReducer, registerErrorReducer, loginErrorReducer} from './authReducer'
import {createProfileReducer,createProfileErrorReducer,editProfileReducer,editProfileErrorReducer,profileReducer} from './profileReducer'
import { dogReducer,createDogReducer,createDogErrorReducer,editDogReducer,editDogErrorReducer} from './dogReducer'
import { walkReducer,createWalkReducer,createWalkErrorReducer,editWalkReducer,editWalkErrorReducer} from './walkReducer'

export default {
    ajaxCalls:ajaxStatusReducer,
    register:registerReducer,
    login:loginReducer,
    registerError:registerErrorReducer,
    loginError:loginErrorReducer,
    profile:profileReducer,
    createProfile:createProfileReducer,
    createProfileError:createProfileErrorReducer,
    editProfile:editProfileReducer,
    editProfileError:editProfileErrorReducer,
    dog:dogReducer,
    createDog:createDogReducer,
    createDogError:createDogErrorReducer,
    editDog:editDogReducer,
    editDogError:editDogErrorReducer,
    walk:walkReducer,
    createWalk:createWalkReducer,
    createWalkError:createWalkErrorReducer,
    editWalk:editWalkReducer,
    editWalkError:editWalkErrorReducer

}