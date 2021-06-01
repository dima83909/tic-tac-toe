var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
var server = require('http').Server(app);
var io = require('socket.io')(server, {
	cors: {
		origin: "https://locahost:4200",
		methods: ["GET", "POST"],
		credentials: true,
		allowEIO3: true
	},
	transport: ['websocket']
});

io.on('connection', function (socket) {
	console.log('A user connected');
	socket.emit('test event', 'here is some data')
})
server.listen(3000, () => {
	console.log('Socket.io server is listeting on port 3000');
})