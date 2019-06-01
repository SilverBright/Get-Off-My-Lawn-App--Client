import React from 'react';
import PostService from '../services/PostService';

const Posts = ({ posts }) => {
  const renderPosts = posts.map(post =>
    <span key={post.id}>{post.title}</span>
    )

    return (
      <div>
        { renderPosts }
      </div>
    )
}

export default PostService;