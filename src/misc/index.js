import moment from 'moment';

/**
 * Replace links in tweet text with anchor tags.
 * @param {string} text - tweet copy
 * @param {array} links - list of links to be replaced
 */
export const activateTweetLinks = (text, links) => {
  let copy = text;
  links.forEach((link) => {
    copy = text.replace(
      link.url,
      `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.url}</a>`,
    );
  });

  return copy;
};

/**
 * Format date to display how much time ago the tweet was posted.
 * Example from: `Thu May 11 00:28:26 +0000 2017` to `4 minutes ago`
 * @param {string} date - tweet date
 */
export const formatTweetDate = (date) => {
  return moment(date, 'ddd, MMM DD HH:mm:ss ZZ YYYY').fromNow()
}

/**
 * Miscellaneous helper functions.
 */
export default {
  activateTweetLinks,
};
