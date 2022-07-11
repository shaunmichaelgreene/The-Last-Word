const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const isActive = require('../utils/isActive');
var differenceInHours = require('date-fns/differenceInHours');


//load all posts for the homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        function isActive(dbPostData) {
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
        posts.is_active = isActive(posts)
        res.render('homepage.handlebars', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//fetch a single post to render with handlebars
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const post = dbPostData.get({ plain: true });
        function isActive(dbPostData) {
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
                return true //(post is less than 24 hours old, post IS active no matter what)
            } else if (noComments) {
                return false //(post is older than 24 hrs, no comments exist, post IS NOT active)
            } else if (lastCommentHoursDifference < timeLimit) {
                return true //(post is older than 24 hours, comments exist but since most recent is younger than 24 hrs,  post is still active)
            } else return false //(comments exist, but since most recent is older than 24 hours, post is NOT active)
            
        }
        post.is_active = isActive(post)
        console.log(post.is_active)
        //extra conditional to see who won the Last Word
        if (post.is_active == false && post.comments.length > 0) {
            var lastComment = post.comments[post.comments.length - 1]
            var lastWordUser = lastComment.user.username
            post.last_word = lastWordUser
        } else if (post.is_active == false && post.comments.length == 0) {
            var lastWordUser = post.user.username
            post.last_word = lastWordUser
        };
        console.log(post.last_word)
        res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

module.exports = router;