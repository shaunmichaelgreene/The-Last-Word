var format = require('date-fns/format');
var formatDistanceToNow = require('date-fns/formatDistanceToNow');
var differenceInHours = require('date-fns/differenceInHours');


module.exports = {
    format_date: date => {
      // return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      //   date
      // ).getFullYear()}`;
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
    },
    check_comments: (post) => {
      if (post.comments.length === 0) {
        return true;
      } else {
        return false;
      }
    }
};