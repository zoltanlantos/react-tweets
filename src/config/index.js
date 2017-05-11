module.exports = {
  server: {
    port: 30000,
  },
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY || 'your_consumer_key',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'your_consumer_secret',
    access_token: process.env.TWITTER_ACCESS_TOKEN || 'your_access_token',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'your_access_token_secret',
  },
};
