const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

const app = express();

app.get('/',(req,res)=>{
  res.sendFile(`${__dirname}/public/index.html`)
});

const server = http.createServer(app).listen(3000);
const io = socketIO(server);

io.on('connection',socket=>{
  socket.emit('greeting-from-server',{
    greeting: 'Hello Client'
  });
  socket.on('greeting-from-client',message=>{
    console.log(message);
  })
});