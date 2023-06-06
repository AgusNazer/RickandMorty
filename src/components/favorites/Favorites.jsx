import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styled from "styled-components";

// DAR ESTILOS A FAVORITES.
const CardContainer = styled.div`
height: 35em;
border: 1px solid white;
background-color: rgba(241, 241, 241, 0.2);
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Container = styled.div`
  align-items: center;
  width: 100%;
  // max-width: 300px;
  text-align: center;
  position: relative;

  @media (max-width: 710px) {
  
}

`;



const Name = styled.h2`
  color: rgb(31, 97, 141);
  font-family: roboto;
`;

const Info = styled.h2`
  font-size: 20px;
  font-family: roboto;
`;

const Image = styled.img`
// border: 2px solid blue;
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
// border: 2px solid blue;

  width: 100%;
  background-color: rgba(211, 209, 209, 0.5);
  font-family: roboto;
`;

const Favorites = () => {
const favorites = useSelector((state) => state.myFavorites)

    return(
        <CardContainer>
    <Container>
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
        
    </Container>
        </CardContainer>
    );
};

export default Favorites;