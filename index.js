var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*
Changes:
1) Changes "message: " to "<username>: "
2) Be able to send files and images. Probably going to skip this one.
3) Check project reqs
*/

app.get('/', function(ren, res){
  res.sendFile(__dirname + '/index.html' );
});

// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 		console.log('user disconnected');
// 	});
// });

// io.on('connection', function(socket){
// 	socket.on('chat message', function(msg){
// 		console.log('message: ' + msg);
// 	});
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(9020, function(){
  console.log('listening on *:9020');
});