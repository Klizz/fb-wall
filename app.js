import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import socketio from 'socket.io';
import socketHandler from './src/server/socketHandler';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();

const APP = express();
const SERVER = http.createServer(APP);

APP.use(express.static('dist'));
APP.set('views', './src/server/views');
APP.set('view engine', 'pug');
APP.use(bodyParser.json());
APP.use(morgan('dev'));

// RUTAS
APP.use(require('./src/routes/auth.js'));
APP.use(require('./src/routes/states.js'));

// GLOBAL VARIABLES
const states = [];

// SOCKET CONFIG
const io = socketio(SERVER);
io.set('transports', ['websocket', 'polling']);
io.on('connection', socketHandler(io, states));


// SERVER
SERVER.listen(5000);