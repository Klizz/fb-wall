import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import socketio from 'socket.io';
import socketHandler from './src/server/socketHandler';
import bodyParser from 'body-parser';

dotenv.config();

const APP = express();
const SERVER = http.createServer(APP);

APP.use(express.static('dist'));
APP.set('views', './src/server/views');
APP.set('view engine', 'pug');
APP.use(bodyParser.json());

const io = socketio(SERVER);

const states = [];

io.set('transports', ['websocket', 'polling']);
io.on('connection', socketHandler(io, states));

APP.get('/', (req, res) => {
  res.render("home");
});

SERVER.listen(5000);