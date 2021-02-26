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
                loading: true
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload
            }
        case LOGIN_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case LOGOUT:
            return{
                loading:false,
                userDetails: {}
            }
        default:
            return state
    }
}