require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const hours = require('./functions/hours');
const routes = require('./routes');
const cors = require('cors');


app.use('/uploads', express.static('uploads'));
const corsOptions = {
    origin: `${process.env.URLFRONT}`, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));





const io = require('socket.io')(server, {
    cors: {
        origin: `${process.env.URLFRONT}`
    }
})
io.on('connection', socket => {
    console.log(`Usuário ${socket.id} conectou.`);
socket.on('username', ({name, foto, ip}) => {
    socket.data.name = name;
    socket.data.foto = foto;
    console.log(ip);
    io.emit('entrada', {
        text: `O ${socket.data.name} se conectou!`,
        type: 'server',
        hours: hours(),
       });
});
socket.on('mensagem', ({ mensagem=null, foto=null}) => {
    console.log(foto)
  io.emit('receive', {
   text: mensagem,
   autor: socket.id,
   name: socket.data.name,
   foto: socket.data.foto,
   imagem: foto,
   hours: hours(),
  });
});
});
app.use(routes);
const port = 3000;
server.listen(port, () => {
    console.log('Servidor rodando na porta', port);
});
