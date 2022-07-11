const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
var differenceInHours = require('date-fns/differenceInHours')


//get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'text',
            'created_at',
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get specific post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'text',
            'created_at',
            'is_active'
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
            res.status(404).json({ message: 'No post found with this ID!' });
            return;
        }
        //test logic
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
        console.log('success!')
        console.log(dbPostData.is_active)
        res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

//create new post (expects {"text": 'This is a test post!', "user_id": 1})
router.post('/', withAuth, (req, res) => {
    Post.create({
        text: req.body.text,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//dev route only - delete post
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;