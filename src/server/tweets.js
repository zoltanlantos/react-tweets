const Twit = require('twit');
const config = require('../config');

const T = new Twit({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token: config.twitter.access_token,
  access_token_secret: config.twitter.access_token_secret,
  timeout_ms: 60 * 1000,
});

const tweets = {
  /**
   * Request statuses/user_timeline
   * @param {string} screenName - Twitter screen name
   */
  getUserTimeline(screenName) {
    return new Promise((resolve, reject) => {
      T.get('statuses/user_timeline', { screen_name: screenName, count: 10 }, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },
};

module.exports = tweets;
