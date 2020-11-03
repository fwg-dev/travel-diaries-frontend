import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import thunk from 'redux-thunk'


//just displaying different syntax options here(line 9, 10)
const reducer = combineReducers({
  users:  usersReducer,
  currentUser,
  loginForm
 })
 
//  const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 
 
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )
 

 export default store