const http = require('http');
// const data = require('./utils/data'); // clase 3 borrar la data porque ahora todo viene de la api.
const {getCharById} = require('./controllers/getCharById')

http.createServer(
    (req, res) => {
       res.setHeader('Access-Control-Allow-Origin', '*');

      const { url } = req;
    //   console.log(url);   

      if(url.includes("/rickandmorty/character")){
        // name, gender, species, origin, image y status.
      const id = url.split('/').at(-1); // at accede a la posicion del array
     
//tarea clase3
     getCharById(res, Number(id));

     //tarea integracion clase2, ahora en la tarea de la clase 3 viene todo desde la api.
      // const character = data.find((char) => char.id == id);
    //   console.log(character);

    // if(character){
    //     res.writeHead(200, {'Content-type': 'application/json'})
    //     return res.end(JSON.stringify (character));
    //   }else{
    //     res.writeHead(404, {'Content-type': 'application/json'})
    //     return res.end(JSON.stringify({error: 'Character not found'}))
    //   }

    }
})
.listen(3001, 'localhost');

    //RUTAS 
    //rickandmorty/character/id
