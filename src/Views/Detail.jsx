// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Detail = () => {
//   const { detailId } = useParams();
//   const [character, setCharacter] = useState({});

//   useEffect(() => {
//     const URL_BASE = "https://rickandmortyapi.com/api";
    
//       axios(`${URL_BASE}/character/${detailId}`).then((response) => 
//         setCharacter(response.data)
//       )
//       .catch((error) => {
//         console.log(error);});
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Esta sería la ficha del personaje de ID {detailId}</h1>
//         <p>{character.name}</p>
//         <p>{character.status}</p>
//         <p>{character.species}</p>
//         <p>{character.gender}</p>
//         <p>{character.origin?.name}</p>
//         <img src={character.image} alt="img" />
//       </div>
//     </>
//   );
// };

// export default Detail;
//////////////////////////////////////////////////

// peticion con FETCH:

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
console.log(id);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://rickandmortyapi.com/api";

    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const CardContainer = styled.div`
  height: 35em;
  border: 1px solid white;
  background-color: rgba(241, 241, 241, 0.2);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `

  const Container = styled.div`
  // border: 2px solid blue;
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

  return (
    <CardContainer>
      <Container>
        <h1>Esta sería la ficha del personaje de ID {id}</h1>
        <TextContainer>
        <Name>Name: {character.name}</Name>
        <Info>Status: {character.status}</Info>
        <Info>Specie: {character.species}</Info>
        <Info>Gender: {character.gender}</Info>
        <Info>Origin name: {character.origin?.name}</Info>
        <img src={character.image} alt="img" />
        </TextContainer>
      </Container>
    </CardContainer>
  );
};

export default Detail;



// RESUMEN DEL CODIGO
// el código que has proporcionado parece correcto. Se utiliza el hook useParams de react-router-dom para obtener el parámetro de la URL, y luego se realiza una solicitud fetch a la API utilizando ese parámetro.

// Después de recibir la respuesta, se convierte a formato JSON y se establece en el estado character utilizando el hook useState. La dependencia [id] se pasa al hook useEffect, lo que asegura que la solicitud se realice cada vez que el valor de id cambie.

// En la parte de la interfaz de usuario, se muestra el valor de id en el encabezado y se accede a las propiedades del objeto character para mostrar los detalles del personaje, como su nombre, estado, especie, género, etc.

// En general, el código parece correcto y debería funcionar correctamente para mostrar los detalles del personaje de acuerdo al ID proporcionado en la URL.