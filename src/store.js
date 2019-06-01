import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import posts from './reducers/posts';
import ReduxThunk from 'redux-thunk';


const reducers = combineReducers({
  posts
})

// Compose is used when you want to pass multiple store enhancers to the store

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  )

export default store;