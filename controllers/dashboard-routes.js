const router = require('express').Router();
const sequelize = require('../config/connection');

// Home page route.
router.get('/', function (req, res) {
    res.send('The Last Word Homepage');
  })

module.exports = router;
