'use strict'
const socketio = require('socket.io');

module.exports = function (server) {
	let io = socketio(server);

	io.on('connection', function(socket){
  		console.log('Client connected '+socket.id);
  		socket.on('disconnect',function(){
  			console.log('Client disconnected '+socket.id);
  		});
  		socket.on('New Text',function(msg){
  			console.log('Message: '+msg);
  			io.emit('chat message',msg);
  		});
	});
}