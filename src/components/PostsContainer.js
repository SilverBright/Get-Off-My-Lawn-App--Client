import React, { Component } from 'react'

class PostsContainer extends Component {
  render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="postInput" type="text" 
	    placeholder="Add a post" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul className="postList">
	   </ul>
	</div>
      </div>    
    )
  }
}

export default PostsContainer