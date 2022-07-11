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

//test differenceInHours method, where testDate2 = current date & testDate3 = 7/8/2022 @ 10:30PM) - prints 45
var hoursDifference = differenceInHours(testDate2, testDate3)
console.log(hoursDifference)

//logic for the isActive property

function isActive(dbPostData) {
    //deconstruct dbPostData to establish easier to use variables for the time of the Post, last comment of the post, and time of the last comment. Also convert the difference in the postTime and currentTime for the post into a usable value (and do the same for the most recent comment), using the date-fns node package's differenceInHours method
    timeLimit = 24
    currentTime = new Date()
    postTime = dbPostData.created_at
    var postHoursDifference = differenceInHours(currentTime, postTime)
    if (dbPostData.comments) {
        comments = dbPostData.comments
        lastComment = comments[comments.length - 1]
        lastCommentTime = lastComment.created_at;
        lastCommentHoursDifference = differenceInHours(currentTime, lastCommentTime)
    } else {
        var noComments = true //if dbPost.Data.comments doesn't exist, then there are no comments
    }

    if (postHoursDifference < timeLimit) {
        return true //(post is less than 24 hours old, post IS active no matter what)
    } else if (noComments) {
        return false //(post is older than 24 hrs, no comments exist, post IS NOT active)
    } else if (lastCommentHoursDifference < timeLimit) {
        return true //(post is older than 24 hours, comments exist but since most recent is younger than 24 hrs,  post is still active)
    } else return false //(comments exist, but since most recent is older than 24 hours, post is NOT active)
}