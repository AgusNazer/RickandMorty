import axios from 'axios';
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
// export const SHOW_ALL_FAV = "SHOW_ALL_FAV"






// ACTION | addFav
export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character)

          if(!data.length) throw  Error ('No hay favoritos')

         return dispatch({
           type: ADD_FAV,
           payload: data,
        });

      } catch (error) {
         
      }
      
      
   
   }; 
};
  

  
  export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   //  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)

      //   if(!data.length) throw Error ('No hay favoritos')

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
        });

      } catch (error) {
         console.log(error.message);
      }
       
       
      
    };
 };


  export const filterCards = (gender) => {
    return{
      type: "FILTER",
      payload: gender
    };
  };

  export const orderCards = (orden) => {
    return {
      type:"ORDER",
      payload: orden
    }
  };






  // CODIGO ANTES DE HOMEWORK ASYNC
//   import axios from 'axios';
//   export const ADD_FAV = "ADD_FAV";
//   export const REMOVE_FAV = "REMOVE_FAV";
//   export const FILTER = "FILTER";
//   export const ORDER = "ORDER";
//   // export const SHOW_ALL_FAV = "SHOW_ALL_FAV"
  
  
  

  
  
  
//   // ACTION | addFav
//   export const addFavorite = (character) => {
//      const endpoint = 'http://localhost:3001/rickandmorty/fav';
//      return (dispatch) => {
//         axios.post(endpoint, character)
//         .then(({ data }) => {
//            return dispatch({
//               type: ADD_FAV,
//               payload: data,
//            });
//         });
//      };
//   };
 
    
//     export const removeFavorite = (id) => {
//       const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//       return (dispatch) => {
//          axios.delete(endpoint)
//          .then(({ data }) => {
//             return dispatch({
//                type: REMOVE_FAV,
//                payload: data,
//            });
//          });
//       };
//    };
  
  
//     export const filterCards = (gender) => {
//       return{
//         type: "FILTER",
//         payload: gender
//       };
//     };
  
//     export const orderCards = (orden) => {
//       return {
//         type:"ORDER",
//         payload: orden
//       }
//     };
  
