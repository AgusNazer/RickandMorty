import { useSelector } from "react-redux";
import Card, { CardContainer,Container,} from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import styled from "styled-components";


// DAR ESTILOS A FAVORITES.
const Select = styled.select`
border-radius: 5px;
width: 10em;
height: 30px;

background-color: white;
border: none;
margin: 5px;
`


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
        
    <>
          <Select onChange={handleOrder}>
              <option value = "A">Ascendente</option>
              <option value = "D">Descendente</option>
          </Select>

          <Select onChange={handleFilter}>
              <option value = "Male">Male</option>
              <option value = "Female">Female</option>
              <option value = "Genderless">Genderless</option>
              <option value = "unknow">Unknow</option>
          </Select>

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
        
        </>
     
    );
};

export default Favorites;