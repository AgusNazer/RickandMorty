import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
import axios from 'axios';

const initialState = {
    myFavorites: [],
    allCharactersFilter: [] // hacemos el filtro sobre los favoritos agregados.
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
        // return{
        //      ...state,
        //       myFavorites: [...state.allCharactersFilter, action.payload],
        //       allCharactersFilter: [...state.allCharactersFilter, action.payload]
        // };

        return { ...state, 
            myFavorites: action.payload, 
            allCharactersFilter: action.payload };
        


        case REMOVE_FAV:
        // return { ...state, myFavorites: state.myFavorites.filter(char => char.id !== action.payload
        //     ),
        // };
        return {
            ...state,
            myFavorites:  action.payload
          };
          

        
        case FILTER:
            const allCharactersFiltered = state.allCharactersFilter.filter(
            (char)=> char.gender === action.payload );
            return {
                ...state, 
                myFavorites: allCharactersFiltered
            };


           case ORDER:
            const allCharactersFilterCopy = [...state.allCharactersFilter]; // guardo las copias de los favoritos
            return {
                ...state,
                myFavorites:
                action.payload === "A" 
                ? allCharactersFilterCopy.sort((a,b) => a.id - b.id) 
                : allCharactersFilterCopy.sort((a,b) => b.id - a.id)
            }     

        default:
            return {...state};
    }
}

export default rootReducer;