import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import posts from './reducers/posts';


// combine all the reducers
const reducers = combineReducers({
  posts
})

// Compose is used when you want to pass multiple store enhancers to the store


// Redux store is an object in which the state of an application is stored. 
// It provides functions for components to fetch and update the state of the app. 
// The main benefit of the store for components is that parents don’t need to pass the state (data) via props to child components. 

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  )

export default store;