import React, { Component } from 'react';
import Tweet from '../components/tweet';
import config from '../config';

class TweetList extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      screenName: 'cnnbrk',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getTweets();
  }
  getTweets() {
    fetch(`http://localhost:${config.server.port}/${this.state.screenName}-tweets`)
      .then(result => result.json())
      .then(tweets => this.setState({ tweets }));
  }
  handleChange(e) {
    this.setState({ screenName: e.target.value });
  }
  handleClick() {
    this.getTweets();
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.screenName}
            onChange={this.handleChange}
            placeholder="Type twitter screen name"
          />
          <button
            onClick={this.handleClick}
          >Load tweets</button>
        </div>
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
      </div>
    );
  }
}

export default TweetList;
