const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan')


//Middleware express.json()
server.use(express.json());
server.use(morgan('dev'));

// configuracion de CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


// Middleware para agregar "/rickandmorty" antes de cada ruta
server.use('/rickandmorty', router);

module.exports = server;