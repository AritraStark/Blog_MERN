import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../constants/userConstants.js'

export const loginReducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_INIT:
            return {
                loading: true,
                success: false
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case LOGIN_FAIL:
            return{
                loading: false,
                error: action.payload,
                success: false
            }
        case LOGOUT:
            return{
                loading:false,
                success:false
            }
        default:
            return state
    }
}