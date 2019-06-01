import React, { Component } from 'react';
// import PostService from '../services/PostService';
import { fetchPosts } from '../actions/posts';
import { connect } from 'react-redux';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

render() {
  const renderPosts = this.props.posts.map(post =>
    <div className="getoffmylawn card" key={ post.id }>
      <div className="card-content">
        <span className="card-title purple-text">{ post.title }</span>
        <p>{ post.content }</p>
      </div>
    </div>
  )

    return (
      <div>
        { renderPosts }
      </div>
    )
  }
}

  
export default connect(
  state => ({
    posts: state.posts}), 
    { fetchPosts }
    )(Posts);