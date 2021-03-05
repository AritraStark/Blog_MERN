import { CREATE_POST_INIT, CREATE_POST_SUCCESS, CREATE_POST_FAIL, GET_ALL_POSTS_INIT, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL, UPDATE_POST_INIT, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, GET_POST_INIT, GET_POST_SUCCESS, GET_POST_FAIL, DELETE_POST_INIT, DELETE_POST_SUCCESS, DELETE_POST_FAIL } from '../constants/postConstants'

export const createPostReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST_INIT:
            return {
                ...state,
                loading: true,
            }
        case CREATE_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        case CREATE_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return {
                state
            }
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

export const updatePostReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case GET_POST_INIT:
            return {
                loading: true,
            }
        case GET_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        case GET_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return {
                state
            }
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
            return {
                state
            }
    }
}
