const User = require('../models/User');

// GET all users
module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // GET a single user by _id and populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // PUT to update a user by its _id
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // DELETE to remove user by its _id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!deletedUser) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(deletedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $push: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
