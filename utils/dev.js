var format = require('date-fns/format');

var testDate = "2022-07-08T20:32:16"
var result = format(new Date(testDate), "MMM-dd-yyyy' at 'HH:mm:ss");
console.log(result);