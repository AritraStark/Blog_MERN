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
    UPDATE_POST_FAIL,
    UPDATE_POST_INIT,
    UPDATE_POST_SUCCESS,
} from '../constants/postConstants.js'

export const createPost = (title, body) => async (dispatch) => {
    try {
        //Dispatching the initiation reducer
        dispatch({
            type: CREATE_POST_INIT
        })

        //Setting header to json type
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const posts = await axios.post('/api/posts/', { title, body }, config)

        //Dispatching on successful api call and passing post data as payload
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: posts
        })

    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
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
        console.log(posts)
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

export const updatePost = (id, title, body) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_POST_INIT
        })

        const {
            userDetails: { userDetails }
        } = getState()

        const config = {
            headers: {
                'x-auth': userDetails.token,
                'Content/type': 'application/json'
            }
        }

        const updatedPost = await axios.post(`api/posts/:${ id }`, { id, title, body }, config)

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: updatedPost
        })

    } catch (error) {
        dispatch({
            type: UPDATE_POST_FAIL,
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
            userDetails: { userDetails }
        } = getState()

        const config = {
            headers: {
                'x-auth': userDetails.token,
                'Content/type': 'application/json'
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