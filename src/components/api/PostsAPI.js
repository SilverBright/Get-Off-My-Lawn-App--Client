const API_URL = process.env.REACT_APP_API_URL;

const PostsAPI = {
  fetchPosts() {
    return fetch(`${API_URL}/posts`)
  }
};

export default PostsAPI;