import { useSelector } from "react-redux";
import Card from "../Card/Card";
// import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";


// DAR ESTILOS A FAVORITES.


const Favorites = () => {

  

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites)
    const [aux, setAux] = useState(false);

const handleOrder = (event) =>{
     dispatch(orderCards(event.target.value))

     setAux(!aux)
};

const handleFilter = (event) =>{ 
    dispatch(filterCards(event.target.value))
};



    return(
        // <CardContainer>
       <div>
          <select onChange={handleOrder}>
              <option value = "A">Ascendente</option>
              <option value = "D">Descendente</option>
          </select>

          <select onChange={handleFilter}>
              <option value = "Male">Male</option>
              <option value = "Female">Female</option>
              <option value = "Genderless">Genderless</option>
              <option value = "unknow">Unknow</option>
          </select>

    {/* <Container> */}
        {favorites.map(({ id, name, status, species, gender, origin, image}) => {
                 return (
                
                <Card
               
                key={id} // Asegúrate de proporcionar una clave única para cada elemento en el map
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                
               
               
               />
                );
            })}
        

     </div>
    );
};

export default Favorites;