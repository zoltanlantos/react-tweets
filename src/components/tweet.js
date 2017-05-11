import React, { Component } from 'react';
import { activateTweetLinks, formatTweetDate } from '../misc';
// TODO: eject project and add support for CSS modules
// import styles from './tweet.css';
import './tweet.css';

class Tweet extends Component {
  render() {
    const t = this.props.tweet;
    return (
      // <div className={styles.tweet}>
      <div className="tweet">
        <h3 className="tweet__user">
          <a href={t.user.url} target="_blank" rel="noopener noreferrer">
            <img className="tweet__logo" src={t.user.profile_image_url} border="0" alt={t.user.name} />
            {t.user.name}
          </a>
        </h3>
        <p dangerouslySetInnerHTML={{__html: activateTweetLinks(t.text, t.entities.urls)}} />
        <div className="tweet__tiem">
          {formatTweetDate(t.created_at)}
        </div>
      </div>
    );
  }
}

export default Tweet;
