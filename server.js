'use strict'

const express = require('express');
const path = require('path');
const router = require('./router');
const app = express();
const port = 3000;
const http = require('http').Server(app);
//const socketio = require('socket.io');
//const io = socketio(http);
const io = require('./IO');

app.use('/static', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/',router);

io(http);
/*io.on('connection', function(socket){
  console.log('Client connected '+socket.id);
  socket.on('disconnect',function(){
  	console.log('Client disconnected '+socket.id);
  });
  socket.on('chat message',function(msg){
  	console.log('Message: '+msg);
  	io.emit('chat message',msg);
  });
});*/

http.listen(port,onListen);

function onListen () {
	console.log(`We are using port ${port}`)
}