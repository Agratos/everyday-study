const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
const port = 4000;

const client = [];

// 소켓 시작
socket.on('listening', () =>{
    let addr = socket.address();
    console.log(`?Listening for UDP packets at ${addr.address} : ${addr.port}`);
});

socket.on('error', (err) => {
    console.log(`UDP error: ${err.stack}`);
});

socket.on('message', (message, info) => {
    let clientAddress = `${info.address}:${info.port}`;
    
    if(client.indexOf(clientAddress) < 0){
        client.push(clientAddress);
    }
    console.log(`server got message: ${message}`);
    //console.log(`server got from ${info.address} port: ${info.port}`);
    let address = [];
    let i = 0
    while(client[i]){
        if(client[i] !== clientAddress){
            address = client[i].split(':');
            socket.send(message, 0, message.length, address[1], address[0],console.log(`${message}를 보냅니다.`));
        }
        i += 1;
    }
})

socket.bind(port);
