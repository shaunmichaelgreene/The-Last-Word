var differenceInHours = require('date-fns/differenceInHours')

function isActive(dbPostData) {
    //deconstruct dbPostData to establish easier to use variables for the time of the Post, last comment of the post, and time of the last comment. Also convert the difference in the postTime and currentTime for the post into a usable value (and do the same for the most recent comment), using the date-fns node package's differenceInHours method
    timeLimit = 24
    currentTime = new Date()
    postTime = dbPostData.created_at
    var postHoursDifference = differenceInHours(currentTime, postTime)
    if (dbPostData.comments.length > 0) {
        comments = dbPostData.comments
        lastComment = comments[comments.length - 1]
        lastCommentTime = lastComment.created_at;
        lastCommentHoursDifference = differenceInHours(currentTime, lastCommentTime)
    } else {
        var noComments = true //if dbPost.Data.comments doesn't exist, then there are no comments
    }

    if (postHoursDifference < timeLimit) {
        // console.log(postHoursDifference)
        return true //(post is less than 24 hours old, post IS active no matter what)
    } else if (noComments) {
        return false //(post is older than 24 hrs, no comments exist, post IS NOT active)
    } else if (lastCommentHoursDifference < timeLimit) {
        // console.log(lastCommentHoursDifference)
        return true //(post is older than 24 hours, comments exist but since most recent is younger than 24 hrs,  post is still active)
    } else {
        // console.log(lastCommentHoursDifference)
        return false //(comments exist, but since most recent is older than 24 hours, post is NOT active)
    }
}

module.exports = isActive