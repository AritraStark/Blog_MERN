import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    loginReducer, signupReducer,
 } from './reducers/userReducer.js'
import {
    createPostReducer,
    updatePostReducer,
    getAllPostsReducer,
    deletePostReducer, 
    getUserPostsReducer
} from './reducers/postReducer.js'

const reducer = combineReducers({
    userLogin: loginReducer,
    userSignUp: signupReducer,
    postCreate: createPostReducer,
    postUpdate:updatePostReducer,
    allPostsGet:getAllPostsReducer,
    postDelete:deletePostReducer,
    userPostsGet:getUserPostsReducer,
})

const userDetailsFromStorage = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : ''
const authState = userDetailsFromStorage.token&&true

const initialState = {
    userLogin: {
        userDetails: userDetailsFromStorage,
        success: authState
    },
    
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store