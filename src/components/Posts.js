import React, { Component } from 'react';
// import PostsAPI from './api/PostsAPI';
// import React from 'react';

const Posts = ({ posts }) => {
  const renderPosts = posts.map(post =>
  <div>
    <div key={post.id}> 
      <div>
        {post.title}
      <div>
        {post.content}
      </div>
        {post.comments}
      </div>  
    </div>
  </div>
  )

  return (
    <div>
      {renderPosts}
    </div>
  )
};

// class Posts extends Component {
//   render() {
//     return (
//       <div>
//         List of Posts from /components/Post.js
        
//       </div>
//     );
//   }
// }

export default Posts;