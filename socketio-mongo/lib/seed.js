const mongoose = require('./mongo');
const Post = require('../models/post')(mongoose);
const Comment = require('../models/comment')(mongoose);

//New comments

const comments = [{
  user: 'Batman',
  comment: 'Great post!'
},{
  user: 'Robin',
  comment: 'Interesting ideas...'
},{
  user: 'Joker',
  comment: 'Thanks, Batman'
},{
  user: 'Bruce Wayne',
  comment: 'I agree with Batman'
}];

// Loop over new comments and create them
comments.forEach(comment=>{
  new Comment(comment).save();
});

const posts = [{
  user: 'Two-Face',
  title: 'How to flip a coin'
},{
  user: 'Joker',
  title: 'Top 5 Jokes of 2020'
}];

// Loop over new posts and create them
posts.forEach(post=>{
  new Post(post).save();
});

console.log('Database seeded');

process.exit(0);