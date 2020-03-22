const mongoose = require('../lib/mongo');

const commentSchema = mongoose.Schema({
  user: String,
  comment: String,
});

module.exports = mognoose.module('Comment',commentSchema);