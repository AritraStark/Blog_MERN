import axios from 'axios'
import {
    CREATE_POST_FAIL,
    CREATE_POST_INIT,
    CREATE_POST_SUCCESS,
    DELETE_POST_FAIL,
    DELETE_POST_INIT,
    DELETE_POST_SUCCESS,
    GET_ALL_POSTS_FAIL,
    GET_ALL_POSTS_INIT,
    GET_ALL_POSTS_SUCCESS,
    GET_POST_FAIL,
    GET_POST_INIT,
    GET_POST_SUCCESS,
    GET_USER_POSTS_FAIL,
    GET_USER_POSTS_INIT,
    GET_USER_POSTS_SUCCESS,
    SET_POST_ID,
    TOGGLE_NEW_FALSE,
    TOGGLE_UPDATE_FALSE,
    UPDATE_POST_FAIL,
    UPDATE_POST_INIT,
    UPDATE_POST_SUCCESS,
} from '../constants/postConstants.js'

export const createPost = (title, body) => async (dispatch,getState) => {
    try {
        //Dispatching the initiation reducer
        dispatch({
            type: CREATE_POST_INIT
        })

        //getting the userDetails and therefore the token from the state
        const {
            userLogin: { userDetails }
        } = getState()

        //Setting header to json type
        const config = {
            headers: {
                'x-auth': userDetails.token,
                'Content-type': 'application/json',
            }
        }

        const {data} = await axios.post('/api/posts/', { title, body }, config)

        //Dispatching on successful api call and passing post data as payload
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updatedPost = (id, title, body) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_POST_INIT
        })

        const {
            userLogin: { userDetails }
        } = getState()

        const config = {
            headers: {
                'x-auth': userDetails.token,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(`/api/posts/${id}`, { title, body }, config)

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getAllPosts = () => async (dispatch) => {
    try {
        //Dispatching the initiation reducer
        dispatch({
            type: GET_ALL_POSTS_INIT
        })

        const { data } = await axios.get('api/posts/')
        const {posts} = data
        //Dispatching on successful api call and passing post data as payload
        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload: posts
        })

    } catch (error) {
        dispatch({
            type: GET_ALL_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const getPost = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: GET_POST_INIT
        })

        const config = {
            headers: {
                'Content/type': 'application/json'
            }
        }

        const post = await axios.get(`/api/posts/${id}`,config)

        dispatch({
            type: GET_POST_SUCCESS,
            payload: post
        })
    } catch (error) {
        dispatch({
            type: GET_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deletePost = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type:DELETE_POST_INIT
        })

        const {
            userLogin: { userDetails }
        } = getState()

        const config = {
            headers: {
                'x-auth': userDetails.token,
            }
        }

        await axios.delete(`/api/posts/${id}`,config)

        dispatch({
            type:DELETE_POST_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getUserPosts = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type:GET_USER_POSTS_INIT,
        })

        const {
            userLogin: { userDetails }
        } = getState()

        const config = {
            headers: {
                'x-auth': userDetails.token,
            }
        }

        const {data} = await axios.get(`/api/posts/individual/${id}`,config)

        dispatch({
            type:GET_USER_POSTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: GET_USER_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const setPost = (post) =>(dispatch)=>{
    dispatch({
        type: SET_POST_ID,
        payload:post
    })
}

export const toggleUpdate = () =>(dispatch)=>{
    dispatch({
        type: TOGGLE_UPDATE_FALSE,
        payload:false
    })
}

export const toggleNew = () => (dispatch) => {
    dispatch({
        type:TOGGLE_NEW_FALSE,
        payload: false
    })
}