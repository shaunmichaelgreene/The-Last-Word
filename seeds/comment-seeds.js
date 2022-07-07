const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc  interdum eu, tincidunt.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Tincidunt morbi odio, elementum eu.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'In congue.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Diam arcu libero, rutrum ac,.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'In platea.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Sapien.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Est morbi odio, elementum eu.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Dapibus, morbi odio, elementum eu..',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Praesent integer tincidunt ante vel ipsum.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Ipsum nori bunn.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Norato lomi diam.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Donu wheit leif took.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Rising leo, fancy trio.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Amber olutpat erat.' ,
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'July erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vem rem den.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'Veolor vel esta loma.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Xursus lowkey, lumis.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:'Leka nuka moop',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:'Jest west.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Cmus lemus refus.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Nart lumita shoep.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Deka deku leku .',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'July is utajsd.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Class glasrt nert.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem et elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nappy liem lorem.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Susmend prion sed ante',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Peni lorem et deka',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Toror sed eget eliet.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Kalemtoe donec quias.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Dolar vel in quam.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Peni lorem et deka nisi nibh',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Mjeof ut massa quis',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Maecenas luctus tincidunt magna vulputate.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu  ut massa quis augue  luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam morbi sem mauris, laoreet ut, rhoncus aliquet,vel neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis,  augue. Vestibulum rutrum rutrum a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Diam id ornare imperdiet.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: 'Est et tempus est diam id ornare.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:'Faecenas metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vegitable donec ut dolar vel.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'leo july august id',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'Ac diam ac leo.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Nunc purus, odio',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Nunc viverra prion rasin .',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Lioim leo lama',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Iduem risus leo lama nunc leo',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;