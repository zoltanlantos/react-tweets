import React, { Component } from 'react';
import Tweet from '../components/tweet';
import config from '../config';

class TweetList extends Component {
  constructor() {
    super();
    this.state = { tweets: [] };
  }
  componentDidMount() {
    fetch(`http://localhost:${config.server.port}/cnnbrk-tweets`)
      .then(result => result.json())
      .then(tweets => this.setState({ tweets }));
  }
  render() {
    return (
      <div className="grid">
        { this.state.tweets.length
          ? this.state.tweets.map(tweet => (
            <div className="grid__item" key={tweet.id}>
              <Tweet tweet={tweet} />
            </div>
            ))
          : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default TweetList;
