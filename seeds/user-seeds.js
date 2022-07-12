const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'andiejoewave2',
    email: 'andiejoe@coo.com',
    password: 'password345'
  },
  {
    username: 'justincamp1',
    email: 'jmcamp@wordlast.com',
    password: 'password345'
  },
  {
    username: 'adam22t',
    email: 'adammaddie@last.word.fm',
    password: 'password345'
  },
  {
    username: 'dannyfont3',
    email: 'fontboys3@good.com',
    password: 'password345'
  },
  {
    username: 'tannyboy72',
    email: 'tannerboy2@foohoo.com',
    password: 'password345'
  },
  {
    username: 'applesaucebetty',
    email: 'iloveapples@impost.com',
    password: 'password345'
  },
  {
    username: 'lostbutfound3',
    email: 'danielsave@good.com',
    password: 'password345'
  },
  {
    username: 'tapemeup2',
    email: 'sarahbett@worldweb.net',
    password: 'password345'
  },
  {
    username: 'ms.katie2',
    email: 'katieparker22@yahoo.url',
    password: 'password345'
  },
  {
    username: 'jamesplaysgames3',
    email: 'jamesplays2@google.net',
    password: 'password345'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;