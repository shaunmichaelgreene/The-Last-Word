const { Post } = require('../models');

const postdata = [
  {
    text: 'Waking up early should be a crime.',
    user_id: 10
  },
  {
    text: 'Saturday is for satting',
    user_id: 8
  },
  {
    text: 'Oranges are the superior fruit.',
    user_id: 1
  },
  {
    text: 'Last.',
    user_id: 4
  },
  {
    text: 'Sims 4 or Sims 3?',
    user_id: 7
  },
  {
    text: 'Beau is the best ACNH character. ',
    user_id: 4
  },
  {
    text: 'Last on spot.',
    user_id: 1
  },
  {
    text: 'Mondays should be rest days.',
    user_id: 1
  },
  {
    text: 'Christmas cookies >>>>. ',
    user_id: 9
  },
  {
    text: 'Craberry Juice and Frosted Flakes',
    user_id: 5
  },
  {
    text: 'Coding Boot Camps are tough but worth it.',
    user_id: 3
  },
  {
    text: 'Which anime is your favorite?.',
    user_id: 10
  },
  {
    text: 'Last, last, last, I won.',
    user_id: 8
  },
  {
    text: 'Planners are better digital.',
    user_id: 3
  },
  {
    text: 'Planners are for chums, its all about wiging it.',
    user_id: 3
  },
  {
    text:'I won, you lose.',
    user_id: 7
  },
  {
    text: 'One day at a time.',
    user_id: 6
  },
  {
    text: 'Last on the word.',
    user_id: 4
  },
  {
    text: 'Nintindo Swith or PC?',
    user_id: 6
  },
  {
    text: 'Anyone on here sane?',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;