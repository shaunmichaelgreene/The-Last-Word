const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const isActive = require('../utils/isActive');

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
        ],
        order: [
            ['created_at', 'DESC']
        ]
    })
    .then(dbPostData => {
        //working default route
        // const posts = dbPostData.map(post => post.get({ plain: true }));

        const posts = dbPostData.map((post) => {
            post.dataValues.is_active = isActive(post.dataValues)
            post.get({ plain: true });
            // console.log(post.is_active)
            console.log(post)
            return post.dataValues
        })
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