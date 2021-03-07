import axios from 'axios'
import { LOGIN_FAIL, LOGIN_INIT, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_INIT, SIGNUP_SUCCESS } from '../constants/userConstants.js'

export const login = (email,password) => async(dispatch) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: LOGIN_INIT
        })

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.post(
            '/api/users/login',
            {email,password},
            config
        )
        
        //Setting user data into the local cache 
        localStorage.setItem('userDetails',JSON.stringify(data))

        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const signup = (name,email,password) => async(dispatch) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: SIGNUP_INIT
        })

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.post(
            '/api/users/',
            {name,email,password},
            config
        )
        
        //Setting user data into the local cache 
        localStorage.setItem('userDetails',JSON.stringify(data))

        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userDetails')
    dispatch({
        type: LOGOUT
    })
}