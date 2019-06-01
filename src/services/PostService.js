const API_URL = process.env.REACT_APP_API_URL;

// Step One: fetch all the posts from the api
// Step Two: 
const PostService= {
  fetchPosts() {
    return fetch(`${API_URL}/posts`)
      .then(r=>r.json())
    }
  };

export default PostService;