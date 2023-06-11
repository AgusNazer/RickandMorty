
import { useSelector } from "react-redux";
import Card, { handleCardClose } from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards, removeFavorite } from "../redux/actions";
import { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 5px;
  width: 10em;
  height: 30px;
  background-color: white;
  border: none;
  margin: 5px;
`;

// const Image = styled.img`
//   width: 100%;
//   max-width: 100%;
//   height: auto;
// `;

const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 20px;
  margin: 20px; /* Ajusta los márgenes del contenedor del grid */

  @media (max-width: 710px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
    justify-items: center;
  }
`;

const CardContainer = styled.div`
//   border: 3px solid red;
`;

const CardWrapper = styled.div`
//   border: 5px solid green;
  width: 20rem;
  height: auto;
  margin: 10px; /* Ajusta los márgenes de las cards */
`;

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };


  const handleCardClose = (id) => {
    dispatch(removeFavorite(id));
  };
  return (
    <>
      <Select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </Select>

      <Select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknow">Unknow</option>
      </Select>

      <CardGridContainer>
        {favorites.map(({ id, name, status, species, gender, origin, image, onClose }) => (
          <CardContainer key={id}>
            <CardWrapper>
              <Card
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                onClose={() => handleCardClose(id)}
              />
            </CardWrapper>
          </CardContainer>
        ))}
      </CardGridContainer>
    </>
  );
};

export default Favorites;

