const axios = require('axios');

const getCharById = (res, id) => {
 
 // sin destructuring
//  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//    .then((res) => res.data)
//    .then((data) => {
//     let character = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status
//     };
//    })

// }

//destructuring
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((res) => res.data)
.then(({name, gender, species, origin, image, status}) => { 
 let character = {
     id,
     name,
     gender,
     species,
     origin,
     image,
     status
 };
 res.writeHead(200, {'Content-type': 'application-json'}).end
 (JSON.stringify(character))
})
.catch((error) => res.writeHead(500, {'Content-type': 'text/plane'}).end
(error.message) )

}

module.exports = {
    getCharById,
};