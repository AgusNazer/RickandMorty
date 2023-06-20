import axios from 'axios';
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
// export const SHOW_ALL_FAV = "SHOW_ALL_FAV"



// Action creator para agregar un favorito
// export const addFavorite = (character) => {
//     return {
//       type: "ADD_FAV",
//       payload: character
//     };
//   };



// ACTION | addFav
export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character)
      .then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};
  
  // Action creator para remover un favorito
  // export const removeFavorite = (id) => {
  //   return {
  //     type: "REMOVE_FAV",ƒ
  //     payload: id
  //   };
  // };
  
  export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
         });
       });
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

  // AGREGAR FUNCIONALIDAD DE MOSTRAR TODOS
//   export const showAllFavs = (noFilter) => {
//    return { 
//       type: SHOW_ALL_FAV, 
//       payload: noFilter, };
// };