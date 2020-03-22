const Comment = require('../models/comments');

module.exports = socket =>{
  let count = 0;
  let stream = Comment.find().stream();

  stream.on('data',comment=>{
    socket.emit('comment.add',comment);
    socket.emit('comments.count',{
      count: count ++
    })
  })
}