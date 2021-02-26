import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer } from './reducers/userReducer.js'
import {
    createPostReducer 
} from './reducers/postReducer.js'

const reducer = combineReducers({
    loginReducer: loginReducer,
    createPostReducer: createPostReducer
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