import React, { Component } from 'react';
import { getPosts } from './components/Posts';
import axios from 'axios'

// let posts = [
//   { title: "Someone knocked on my door", id:1, content: "There were two of them!!!  Dressed nicely and holding clipboards. I called the police because they looked supicious.  You never know!!!"},
//   { title: "I think it's raining", id:2, content: "Just thought everyone should know in case you're going outside." },
//   { title: "Free rocks", id:3, content: "I got a pile of rocks on my drive...anyone needs any rocks? " }
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
         <div className="posts-app container">
          <h1 className="center green-text">Get Off My Lawn</h1>
          <div>
            Add a Post
          </div>
          {/* <div className="posts collection"> */}
            <Posts posts={getPosts}/>
        {/* </div> */}
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;
