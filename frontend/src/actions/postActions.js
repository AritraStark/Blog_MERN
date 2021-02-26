import axios from 'axios'
import {
    CREATE_POST_FAIL,
    CREATE_POST_INIT, 
    CREATE_POST_SUCCESS,
    GET_ALL_POSTS_FAIL,
    GET_ALL_POSTS_INIT,
    GET_ALL_POSTS_SUCCESS,
} from '../constants/postConstants.js'

export const createPost = (title,body) => async (dispatch) =>{
    try {
        //Dispatching the initiation reducer
        dispatch({
            type: CREATE_POST_INIT
        })

        //Setting header to json type
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const posts = await axios.post('/api/posts/', {title,body} , config)

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

export const getAllPosts = async (dispatch,getState) =>{
    try {
        //Dispatching the initiation reducer
        dispatch({
            type: GET_ALL_POSTS_INIT
        })

        const {
            userDetails: {userDetails}
        } = getState()

        //Setting header to json type
        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        const {posts} = await axios.get('/api/posts/', {}, config)

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