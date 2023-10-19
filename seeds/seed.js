const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');

const userData = [
  {
    username: 'ZCzphjmqKRSaM',
    email: 'mame@purpuwtaz.bv',
    thoughts: ['I love how the sand feels between my toes.'],
    friends: [],
  },
  {
    username: 'XHgOvPEAWF4cNgiqDjjg',
    email: 'dona@uhubo.sv',
    thoughts: ['I hate sand castles.'],
    friends: [],
  },
  {
    username: '1bPQ8ONFmkjQK0acJ',
    email: 'uhomiddu@du.bd',
    thoughts: ['I really enjoy the ocean breeze.'],
    friends: [],
  },
  {
    username: 'sUxS8WDenz2l',
    email: 'subme@lu.ly',
    thoughts: ["I can't wait to go to the beach."],
    friends: [],
  },
  {
    username: '7BVtnjmaWh8Lfkgc',
    email: 'pezpawko@eh.ie',
    thoughts: ['I am so excited to go to the beach.'],
    friends: [],
  },
];

db.once('open', () => {
  User.deleteMany({})
    .then(() => User.collection.insertMany(userData))
    .then((data) => {
      console.log(data.insertedCount + ' records inserted!');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
