const udp = require('dgram');
const client = udp.createSocket('udp4');
const crypto = require('crypto-js');

const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretKey = 'gkdtkdqorhvmek'; 
let ciphertext = ''
io.on('line', (line) => {
    
    switch(line) {
        case 'quit':
            io.close();
        default:
            ciphertext = crypto.AES.encrypt(line, secretKey).toString()
            client.send(ciphertext, 0, ciphertext.length, 4000, 'localhost', function(err) {
                if(err) client.close();
            });
    }
});
io.on('close', () => {
    process.exit();
})

client.on('message', function(message, info) {
    // console.log(message);
    // console.log(info);
    const bytes = crypto.AES.decrypt(`${message}`, secretKey);
    const orignText = bytes.toString(crypto.enc.Utf8)
    console.log(orignText);
});

