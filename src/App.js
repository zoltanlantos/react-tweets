import React, { Component } from 'react';
import TweetList from './components/tweet-list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Tweets</h2>
        </div>
        <div className="App-content">
          <TweetList />
        </div>
      </div>
    );
  }
}

export default App;
