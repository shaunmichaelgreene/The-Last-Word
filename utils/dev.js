var format = require('date-fns/format');
var formatDistanceToNow = require('date-fns/formatDistanceToNow')

//format date to make readable
var testDate = "2022-07-08T20:32:16"
var result = format(new Date(testDate), "MMM-dd-yyyy' at 'HH:mm:ss");
console.log(result);

//check if it has been 24 hours since the last/most-recent comment:
if (comments) {
    //pull the last comment first
    lastComment = comments[comments.length -1];
    //then check the timestamp of the last comment
    lastCommentTime = lastComment.created_at;

} else
//24 hours from post.created_at


formatDistanceToNow(lastCommentTime, )