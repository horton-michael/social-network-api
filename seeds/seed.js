const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

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

const thoughtData = [
  {
    thoughtText: 'I love how the sand feels between my toes.',
    username: 'ZCzphjmqKRSaM',
  },
  { thoughtText: 'I hate sand castles.', username: 'XHgOvPEAWF4cNgiqDjjg' },
  {
    thoughtText: 'I really enjoy the ocean breeze.',
    username: '1bPQ8ONFmkjQK0acJ',
  },
  { thoughtText: "I can't wait to go to the beach.", username: 'sUxS8WDenz2l' },
  {
    thoughtText: 'I am so excited to go to the beach.',
    username: '7BVtnjmaWh8Lfkgc',
  },
];

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const thoughts = await Thought.insertMany(thoughtData);
    const users = userData.map((user, index) => {
      return { ...user, thoughts: [thoughts[index]._id] };
    });

    await User.insertMany(users);

    console.log('All records inserted!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
