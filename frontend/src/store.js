import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    loginReducer,
 } from './reducers/userReducer.js'
import {
    createPostReducer,
    updatePostReducer,
    getAllPostsReducer,
    deletePostReducer 
} from './reducers/postReducer.js'

const reducer = combineReducers({
    userDetails: loginReducer,
    postCreate: createPostReducer,
    postUpdate:updatePostReducer,
    allPostsGet:getAllPostsReducer,
    postDelete:deletePostReducer,
})

const userDetailsFromStorage = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : ''

const initialState = {
    userDetails: userDetailsFromStorage
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store