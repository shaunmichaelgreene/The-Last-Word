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
    title: 'Lectus nulla at volutpat diam ut venenatis tellus in metus.',
    user_id: 1
  },
  {
    title: 'Non enim.',
    user_id: 4
  },
  {
    title: 'Nec sagittis bibendum arcu vitae elementum curabitur.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, In hac habitasse platea dictumst. ',
    user_id: 4
  },
  {
    title: 'Last on spot.',
    user_id: 1
  },
  {
    title: 'Scelerisque in dictum non quam nec rutrum.',
    user_id: 1
  },
  {
    title: 'Odio ut enim blandit ',
    user_id: 9
  },
  {
    title: 'Craberry Juice Flakes',
    user_id: 5
  },
  {
    title: 'Pulvinar sit amet purus elementum integer.',
    user_id: 3
  },
  {
    title: 'magna sit amet purus gravida.',
    user_id: 10
  },
  {
    title: 'June, tellus feugiat sit amet',
    user_id: 8
  },
  {
    title: 'Time is an integer feugiat,',
    user_id: 3
  },
  {
    title: 'Stimuto urna cometit nunc id suses.',
    user_id: 3
  },
  {
    title:'Vitae quam gutlita lamb.',
    user_id: 7
  },
  {
    title: 'Platea dictumst june sutta danwa.',
    user_id: 6
  },
  {
    title: 'Hutso nour.',
    user_id: 4
  },
  {
    title: 'Hamber justice lamb house',
    user_id: 6
  },
  {
    title: 'Pede lambsauce apples, June one',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;