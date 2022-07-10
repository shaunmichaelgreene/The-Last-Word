var format = require('date-fns/format');
var formatDistanceToNow = require('date-fns/formatDistanceToNow')
var differenceInHours = require('date-fns/differenceInHours')


//format date to make readable
var testDate = "2022-07-08T20:32:16"
var testDate2 = new Date()
var testDate3 = new Date(testDate) 
var result = format(new Date(testDate), "MMM-dd-yyyy' at 'HH:mm:ss");
console.log(result);
comments = ['A', 'B', 'c']

//check if it has been 24 hours since the last/most-recent comment:
if (comments) {
    //pull the last comment first
    lastComment = comments[comments.length -1];
    //then check the timestamp of the last comment
    lastCommentTime = lastComment.created_at;
    //if currentTime - lastCommentTime < 24 hours, make property/attribute activePost = true
} else {
    console.log("no comments found!")
}
//24 hours from post.created_at


// formatDistanceToNow(lastCommentTime, )

var hoursDifference = differenceInHours(testDate2, testDate3)
console.log(hoursDifference)