require('dotenv').config()
const port = 3000
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

let usersOnQueue = [];
let googleListVM = [
    {
        name: 'VM 1',
        status: 'available',
        statusCreating: 'Criando Disco',
        userEmail: '',
        userUsername: '',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: 'BrightNePae',
            password: 'SENHADIFICILPACARALHO'
        }
    },
    {
        name: 'VM 2',
        status: 'unavailable',
        userEmail: 'dkaskdaksd@gmail.com',
        userUsername: 'Gabriel',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: 'BrightNePae',
            password: 'pass2'
        }
    },
    {
        name: 'VM 3',
        status: 'unavailable',
        userEmail: '123123123@gmail.com',
        userUsername: 'Combo',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: 'BrightNePae',
            password: 'pass3'
        }
    },
];

let azureListVM = [
    {
        name: 'VM 1',
        status: 'available',
        statusCreating: 'Criando Disco',
        userEmail: '',
        userUsername: '',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: '3312',
            password: 'passazure'
        }
    },
    {
        name: 'VM 2',
        status: 'unavailable',
        userEmail: 'dkaskdaksd@gmail.com',
        userUsername: 'Gabriel',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: '3312',
            password: 'pass2'
        }
    },
    {
        name: 'VM 3',
        status: 'unavailable',
        userEmail: '123123123@gmail.com',
        userUsername: 'Combo',
        userIp: '',
        connection: {
            ip: '127.0.0.1',
            user: '3312',
            password: 'pass3'
        }
    },
];

const hasVMCreated = require('./Users/HasVMCreated');
const creatingAzureVM = require('./Users/CreatingVM/Azure');
const creatingGoogleVM = require('./Users/CreatingVM/Google');

io.on('connection', (socket) => {
    const socketIp = socket.request.connection.remoteAddress;
    console.log(`New connection from socket ip: ${socketIp}, socket id: ${socket.id}`);

    socket.on('vmEnterQueue', (data) => {
        console.log(data);
        usersOnQueue.push(data);
    })

    hasVMCreated.loader(socket, socketIp, googleListVM, azureListVM);

    setInterval(() => {
        usersOnQueue.forEach(async (user, key) => {
            if (user.ip === socketIp) {
                if (key == 0) {
                    if (user.data.gamingCloud == 'google') {
                        creatingGoogleVM.loader(socket, user.ip, user.data, key, googleListVM, usersOnQueue);
                    } else if (user.data.gamingCloud == 'azure') {
                        creatingAzureVM.loader(socket, user.ip, user.data, key, azureListVM, usersOnQueue);
                    }
                }
            }
        });
        socket.emit('vmQueue', {queueLength: usersOnQueue.length});
    }, 5000)
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})