const router = require('express').Router();
const User = require('../../models/User');

// GET all users
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}
// *get all users
router.get('/users', getUsers);

// GET a single user by _id and populated thought and friend data
async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.userId });

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
// *get a single user
router.get('/users/:userId', getSingleUser);

// POST a new user
async function createUser(req, res) {
  try {
    const dbUserData = await User.create(req.body);
    res.json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
}

// *create a new user
router.post('/users', createUser);
