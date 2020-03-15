import http from 'http';
import express from 'express';
import socketio from 'socket.io';
import socketHandler from './src/server/socketHandler';
import bodyParser from 'body-parser';

const APP = express();
const SERVER = http.createServer(APP);

const states = [];

APP.use(express.static('dist'));
APP.set('views', './src/server/views');
APP.set('view engine', 'pug');
APP.use(bodyParser.json());

const io = socketio(SERVER);

io.set('transports', ['websocket', 'polling']);
io.on('connection', socketHandler(io));

APP.get('/', (req, res) => {
  res.render("home");
});

SERVER.listen(5000);