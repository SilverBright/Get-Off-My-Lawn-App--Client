const API_URL = process.env.REACT_APP_API_URL;

// fetch posts
const PostService= {
  fetchPosts() {
    return fetch(`${API_URL}/posts`)
      .then(r=>r.json())
    }
  };

export default PostService;