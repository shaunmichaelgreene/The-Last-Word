const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Id be in jail.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'For sure.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'This is a crime, apple jacks.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Last, last, last, last.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Sinms 3.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Nope.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Last word in',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Word.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Not a chance.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'People really use real planners still?.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Last.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Best time of the year.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'True.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'Maybe? In another world this would be - sorta true? :P',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Ew.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:'Last word.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:'You lose, I win.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Last, Last.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Lemon Juice and French Fries.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Ideal.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'This makes no sense.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'Digital >>>> Manuscript',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nah, grapes',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: '.... is it bad I use a manual planner?',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'I win.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Last on the word.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Peni lorem et deka',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sims 4, for sure.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'First.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'PC, are you mad?',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Cherries',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Wouldnt you have commited it?.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Last.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Sims 3 is way beter.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Nintindo Switch!.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Pc kinda person.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: 'You lose.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:'So worth it.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'I love him.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'He is sooooo cute,',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'The truth >>>.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Vote for PC.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'PC.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Id be a free man.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Hunter x Hunter.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;