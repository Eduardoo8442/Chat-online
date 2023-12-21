const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
})
io.on('connection', socket => {
socket.on('username', (value) => {
    socket.data.name = value;
    io.emit('entrada', {
        text: `O ${socket.data.name} se conectou!`,
        type: 'server'
       });
});
socket.on('mensagem', text => {
  io.emit('receive', {
   text,
   autor: socket.id,
   name: socket.data.name
  });
});
});

const port = 3000;
server.listen(port, () => {
    console.log('Servidor rodando na porta', port);
});
