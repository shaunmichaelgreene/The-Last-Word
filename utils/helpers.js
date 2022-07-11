var format = require('date-fns/format');
var formatDistanceToNow = require('date-fns/formatDistanceToNow');
var differenceInHours = require('date-fns/differenceInHours');

module.exports = {
    format_date: date => {
      return `${format(new Date(date), "MMM-dd-yyyy' at 'HH:mm:ss")}`
    },
    format_timeElapsed: date => {
      return `${formatDistanceToNow(new Date(date))}`
    },
    format_hoursDifference: date => {
      return `${differenceInHours(new Date(date), new Date())}`
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    }
};