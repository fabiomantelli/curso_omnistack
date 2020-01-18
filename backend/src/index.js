const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://fabiomantelli:senna1994@cluster0-ge0qs.mongodb.net/semana10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());

// Routes sempre depois de express
app.use(routes);

// Métodos HTTP get, post, put, delete

// Tipos de parâmetros:
// (GET) Query Params: request.query (Filtros, ordenação, paginação, ...)
// (PUT, DELETE) Route Params: request.params (Identificar um recurso na alteração e/ou remoção)
// (POST, PUT) Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Banco Não-relacional)

server.listen(3333);