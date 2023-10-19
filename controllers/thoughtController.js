const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  // GET all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // GET a single thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to create new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // PUT to update a thought by id
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // DELETE to remove a thought by id
  async removeThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!deletedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(deletedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
