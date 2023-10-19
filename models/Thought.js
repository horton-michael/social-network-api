const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use a getter method to format the timestamp on query
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    // use ReplySchema to validate data for a reply
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
