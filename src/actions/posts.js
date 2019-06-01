import PostService from '../services/PostService';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './appTransactions';

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
          //(actions/appTransactions)
    dispatch(makeFetchRequest())
    // API
    PostService.fetchPosts()
      // iterate through each post
      .then(posts => {
                //(actions/appTransactions)
        dispatch(finishFetchRequest())
        dispatch(successfullPostsFetch(posts))
      })
      .catch(error => {
                //(actions/appTransactions)
        dispatch(unsuccessfulFetchRequest())
      })
  }
}