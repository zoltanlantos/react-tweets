# React Tweets

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Configuration

Set twitter keys and secrets in [./src/config/index.js](./src/config/index.js) replacing the `your_*` string or set env for the following properties:

```
TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
````

## Running dev

`$ yarn start`

Check [./package.json](./package.json) for available  npm scripts.

## Run Tests

`$ yarn test`

and then press `a`.

## Further improvements

- Add SCSS pre-processor, see [adding-a-css-preprocessor-sass-less-etc](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- Consider ejecting the project and add webpack-sass-loader plugin
- Consider ejecting the project and add support for CSS modules
- Implement Redux
- Add deploy script

