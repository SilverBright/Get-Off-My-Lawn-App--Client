// import React, { Component } from 'react';
// import PostsAPI from './api/PostsAPI';
import React from 'react';

const Posts = ({ posts }) => {
  const renderPosts = posts.map(post =>
    <div className="brainstorm card" key={post.id}>
      <div className="card-content">
        <span className="card-title purple-text">{ post.title }</span>
        {/* </Link> */}
        <p>{ post.content }</p>
        <br/>
        {/* <button onClick={() => this.props.deleteIdea(idea.id)}>Delete Idea</button> */}
      </div>
    </div>
  )

    return (
      <div>
        { renderPosts }
      </div>
    )
  }


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