// const axios = require('axios');

// const getCharById = (res, id) => {
 

// //destructuring
// axios.get(`https://rickandmortyapi.com/api/character/${id}`)
// .then((res) => res.data)
// .then(({name, gender, species, origin, image, status}) => { 
//  let character = {
//      id,
//      name,
//      gender,
//      species,
//      origin,
//      image,
//      status
//  };
//  res.writeHead(200, {'Content-type': 'application-json'}).end
//  (JSON.stringify(character))
// })
// .catch((error) => res.writeHead(500, {'Content-type': 'text/plane'}).end
// (error.message) )

// }

// module.exports = {
//     getCharById,
// };

// implementando express

const axios = require('axios');

const getCharById = (req, res) => {
  const {id} = req.params;
  const URL = 'https://rickandmortyapi.com/api/character';

  axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender})=>{
        if(name){
            const character = {
                id,
                name,
                species,
                origin, 
                image,
                gender,
                status
                }
                
                return res.status(200).json(character);
            }
            return res.status(404).send('Not found');
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = {
     getCharById
    };
