import PostService from '../services/PostService';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './appTransactions';

// Synchronous Action Creators
const successfullPostsFetch = posts => {
  return {
    type: 'SUCCESSFUL_IDEAS_FETCH',
    posts: posts
  }
}

// Async Action Creators
export const fetchPosts = () => {
  return dispatch => {
          //(appTransactions)
    dispatch(makeFetchRequest())
    // API
    PostService.fetchPosts()
      // iterate through each post
      .then(posts => {
                //(appTransactions)
        dispatch(finishFetchRequest())
        dispatch(successfullPostsFetch(posts))
      })
      .catch(error => {
                //(appTransactions)
        dispatch(unsuccessfulFetchRequest())
      })
  }
}