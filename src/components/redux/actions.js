export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REM_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// Action creator para agregar un favorito
export const addFavorite = (character) => {
    return {
      type: "ADD_FAV",
      payload: character
    };
  };
  
  // Action creator para remover un favorito
  export const removeFavorite = (id) => {
    return {
      type: "REMOVE_FAV",
      payload: id
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