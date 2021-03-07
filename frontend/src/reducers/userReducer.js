import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SIGNUP_INIT,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../constants/userConstants.js'

export const loginReducer = (state = {success: false}, action) => {
    switch(action.type){
        case LOGIN_INIT:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOGOUT:
            return{
                ...state,
                loading:false,
                success:false
            }
        default:
            return state
    }
}

export const signupReducer = (state = {success: false}, action) => {
    switch(action.type){
        case SIGNUP_INIT:
            return {
                ...state,
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case SIGNUP_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}