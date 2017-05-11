const tweets = require('./tweets');

describe('tweets', () => {
  it('exports get user timeline', () => {
    expect(tweets.getUserTimeline).toBeDefined();
  });
});
