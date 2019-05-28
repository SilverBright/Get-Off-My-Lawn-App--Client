import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
         <div className="ideas-app container">
          <h1 className="center blue-text">Get Off My Lawn</h1>
          <div>
            Post
          </div>
          <div className="ideas collection">
            add a post
        </div>
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;
