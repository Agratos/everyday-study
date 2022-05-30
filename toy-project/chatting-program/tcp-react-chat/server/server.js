const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors');
const { listenerCount } = require('process');
const io = require('socket.io')(server,{
    cors : {
        origin : "*",
        Credential : true
    }
});

let userSocketId = {}

// connection 이벤트가 발생하면 자동으로 bind가 된다.
io.on('connection', socket=>{
    socket.on('disconnect', () => {
        let name = userSocketId[socket.id];
        console.log(name)
        delete userSocketId[socket.id];
        io.emit('name', ({name: 'system', message: `${name}님 께서 퇴장하셧습니다.`}))
    })

    socket.on('message', ({name, message}) => {
        console.log('message');
        io.emit('message', ({name, message}))
    })

    socket.on('name', (name) => {
        userSocketId[socket.id] = name;
        console.log(userSocketId);
        io.emit('name', ({name: 'system', message: `${name}님 께서 입장하셧습니다.`}))
    })
})

server.listen(4000, function(){
    console.log('listening on port 4000');
})