import React, { Component } from 'react';
import Posts from './components/Posts';
// import PostService from './services/PostService';
import './App.css';
// import Dog from './dog.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
        
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
        {/* <img src={ Dog } alt="dog"/> */}
          <div className="posts-app container">
            <h1 className="center -text">Get Off My Lawn</h1>
              <div className="posts collection">
            <Posts posts={this.props.posts} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;

// class App extends React.Component {

  // componentDidMount() {
  //   fetch("http://localhost:3001/api/posts")
  //     .then(r=>r.json())
  //     .then(console.log)
  // }

//   render() {
//     return (
//       <div>
//         Hello World
//       </div>
//     );
//   }
// }

// export default App;