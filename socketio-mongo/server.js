const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');

const app = express();

app.use('/',express.static(`${__dirname}/public`));

const server = http.createServer(app).listen(3000);

const io = socketIO(server)

io.on('connection',socket=>{
  const controllers = ['comments','posts'];
  controllers.forEach((controller,i)=>{
    require(`./controllers/${controller}.controller`)(socket);
  })
});