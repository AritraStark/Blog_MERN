import { CREATE_POST_INIT, CREATE_POST_SUCCESS, CREATE_POST_FAIL, GET_ALL_POSTS_INIT, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL, UPDATE_POST_INIT, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, GET_POST_INIT, GET_POST_SUCCESS, GET_POST_FAIL, DELETE_POST_INIT, DELETE_POST_SUCCESS, DELETE_POST_FAIL, GET_USER_POSTS_FAIL, GET_USER_POSTS_SUCCESS, GET_USER_POSTS_INIT, SET_POST_ID, TOGGLE_UPDATE_FALSE, TOGGLE_NEW_FALSE } from '../constants/postConstants'

export const createPostReducer = (state = {success:false}, action) => {
    switch (action.type) {
        case CREATE_POST_INIT:
            return {
                ...state,
                loading: true,
                success:false
            }
        case CREATE_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload,
                success:true
            }
        case CREATE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        case TOGGLE_NEW_FALSE:
            return{
                ...state,
                success:action.payload
            }
        default:
            return state
    }
}

export const getAllPostsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case GET_ALL_POSTS_INIT:
            return {
                loading: true,
                posts:[]
            }
        case GET_ALL_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case GET_ALL_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const updatePostReducer = (state = { posts: [] , success:false, postId: '' }, action) => {
    switch (action.type) {
        case UPDATE_POST_INIT:
            return {
                ...state,
                loading: true,
                success:false
            }
        case UPDATE_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload,
                success: true
            }
        case UPDATE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        case SET_POST_ID:
            return{
                ...state,
                postId: action.payload
            }
        case TOGGLE_UPDATE_FALSE:
            return{
                ...state,
                success:action.payload
            }
        default:
            return state
    }
}

export const deletePostReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST_INIT:
            return {
                loading: true,
            }
        case DELETE_POST_SUCCESS:
            return {
                loading: false,
            }
        case DELETE_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
            
    }
}

export const getUserPostsReducer = ( state={posts:[]} , action) =>{
    switch (action.type) {
        case GET_USER_POSTS_INIT:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case GET_USER_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}