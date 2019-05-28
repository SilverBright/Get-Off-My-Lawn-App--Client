import React, { Component } from 'react';
import Posts from './components/Posts';
import Lawn from './lawn.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="navbar">
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
         <div className="ideas-app container">
          <h1 className="center green-text">Get Off My Lawn</h1>
          <div>
            Add a Post
          </div>
          <div className="ideas collection">
            <Posts />
        </div>
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;
