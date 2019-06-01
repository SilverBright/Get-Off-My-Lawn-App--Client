import React from 'react';
import './App.css';


class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3001/api/posts")
      .then(r=>r.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
        Hello World

      </div>
    );
  }
}

export default App;