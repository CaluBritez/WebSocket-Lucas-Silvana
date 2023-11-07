import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

import http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);

//Port
app.set('port',process.env.PORT || 3000);

//Ejecutamos la funcion de sockets.js

import {socketIo} from './socket.js';
socketIo(io);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
    console.log('listening on Port',app.get('port'));
});
