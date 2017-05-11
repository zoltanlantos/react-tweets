const express = require('express');
const tweets = require('./tweets');
const config = require('../config');

const app = express();

/**
 * Alias for /status
 */
app.get('/', (req, res) => {
  res.location('/status');
});

/**
 * Returns 200 if the server is listening.
 * API health can be checked by calling this route.
 */
app.get('/status', (req, res) => {
  res.send('Listening');
});

/**
 * Returns tweets from the timeline of :screen_name handle
 */
app.get('/:screenName-tweets', (req, res) => {
  tweets
    .getUserTimeline(req.params.screenName)
    .then(data => res.json(data))
    .catch(error => res.status(500).json(error));
});

const server = app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}.`); // eslint-disable-line no-console
});

module.exports = server;
