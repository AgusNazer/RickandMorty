// implementando express

// const axios = require('axios');

// const getCharById = (req, res) => {
//   const {id} = req.params;
//   const URL = 'https://rickandmortyapi.com/api/character/';

//   axios(`${URL}/${id}`)
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender})=>{
//         if(name){
//             const character = {
//                 id,
//                 name, 
//                 species,
//                 origin, 
//                 image,
//                 gender,
//                 status
//                 }
                
//                 return res.status(200).json(character);
//             }
//             return res.status(404).send('Not found');
//     })
//     .catch(error => res.status(500).send(error.message))
// }

// module.exports = {
//      getCharById
//     };


// implementando async await
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const URL = 'https://rickandmortyapi.com/api/character/';
      
        const {data} = await axios(`${URL}/${id}`)
          
          
              if(!data.name) throw new Error( `ID: ${id} Not found`);
                  const character = {
                      id: data.id,
                      name: data.name, 
                      species: data.species,
                      origin: data.origin, 
                      image: data.image,
                      gender: data.gender,
                      status: data.status
                      }
                      
                      return res.status(200).json(character);
                 
                    } catch (error) {
                        return error.message.includes('ID')
                        ? res.status(404).send(error.message)
                        : res.status(500).send(error.message)
        
    }
}

module.exports = {
     getCharById
    };