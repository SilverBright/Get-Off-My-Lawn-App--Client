import PostAPI from '../services/PostAPI';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './actionTypes';

// import action creators from ./actionTypes
// then define functions to return those actions

// Synchronous Action Creators
const successfullPostsFetch = posts => {
  return {
    type: 'SUCCESSFUL_POSTS_FETCH',
    posts: posts
  }
}

// Async Action Creators
export const fetchPosts = () => {
  return dispatch => {
          // make a fetch request for all posts
          //(actions/actionTypes)
    dispatch(makeFetchRequest())
    // API
    PostAPI.fetchPosts()
      // dispatch actions to complete the request
      .then(posts => {
                //(actions/actionTypes)
        dispatch(finishFetchRequest())
        dispatch(successfullPostsFetch(posts))
      })
      .catch(error => {
                //(actions/actionTypes)
        dispatch(unsuccessfulFetchRequest())
      })
  }
}