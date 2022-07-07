const { Post } = require('../models');

const postdata = [
  {
    text: 'Velit laoreet id donec ultrices tincidunt arcu non.',
    user_id: 10
  },
  {
    text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    text: 'Lectus nulla at volutpat diam ut venenatis tellus in metus.',
    user_id: 1
  },
  {
    text: 'Non enim.',
    user_id: 4
  },
  {
    text: 'Nec sagittis bibendum arcu vitae elementum curabitur.',
    user_id: 7
  },
  {
    text: 'Lorem ipsum dolor sit amet, In hac habitasse platea dictumst. ',
    user_id: 4
  },
  {
    text: 'Last on spot.',
    user_id: 1
  },
  {
    text: 'Scelerisque in dictum non quam nec rutrum.',
    user_id: 1
  },
  {
    text: 'Odio ut enim blandit ',
    user_id: 9
  },
  {
    text: 'Craberry Juice Flakes',
    user_id: 5
  },
  {
    text: 'Pulvinar sit amet purus elementum integer.',
    user_id: 3
  },
  {
    text: 'magna sit amet purus gravida.',
    user_id: 10
  },
  {
    text: 'June, tellus feugiat sit amet',
    user_id: 8
  },
  {
    text: 'Time is an integer feugiat,',
    user_id: 3
  },
  {
    text: 'Stimuto urna cometit nunc id suses.',
    user_id: 3
  },
  {
    text:'Vitae quam gutlita lamb.',
    user_id: 7
  },
  {
    text: 'Platea dictumst june sutta danwa.',
    user_id: 6
  },
  {
    text: 'Hutso nour.',
    user_id: 4
  },
  {
    text: 'Hamber justice lamb house',
    user_id: 6
  },
  {
    text: 'Pede lambsauce apples, June one',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;