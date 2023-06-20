// const http = require('http');
// // const data = require('./utils/data'); // clase 3 borrar la data porque ahora todo viene de la api.
// const {getCharById} = require('./controllers/getCharById')

// http.createServer(
//     (req, res) => {
//        res.setHeader('Access-Control-Allow-Origin', '*');

//       const { url } = req;
//     //   console.log(url);   

//       if(url.includes("/rickandmorty/character")){
//         // name, gender, species, origin, image y status.
//       const id = url.split('/').at(-1); // at accede a la posicion del array
     
// //ejercicio clase3
//      getCharById(res, Number(id));

    

//     }
// })
// .listen(3001, 'localhost');


const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan')
const PORT = 3001;  


// Middleware express.json()
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

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});










// const port = 3000;

// server.listen(port, () => {
//   console.log(`Servidor iniciado en el puerto ${port}`);
// });