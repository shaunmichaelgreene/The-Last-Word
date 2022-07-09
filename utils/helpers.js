var format = require('date-fns/format');

module.exports = {
    format_date: date => {
      // return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      //   date
      // ).getFullYear()}`;
      return `${format(new Date(date), "MMM-dd-yyyy' at 'HH:mm:ss")}`
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    }
  };
  