import styled from "styled-components";
import { Link } from "react-router-dom";

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
  max-width: 300px;
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

const Button = styled.button`
  border:none;
  cursor:pointer;
  background-color: rgb(218, 68, 70);
  width: 2.2em;
  height:30px;
  border-radius: 25px;
  position: absolute;
  top: 0;
  right: 0;
  margin:5px;

  /* Agrega estas propiedades para centrar el contenido del botón */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const handleCardClose = () => {
    onClose(id);
  };
  return (
   <CardContainer>
    <Container>
      <Image src={image} alt='' />
      <TextContainer>

       <Link to={`/detail/${id}`}>
        <Name>Name: {name}</Name>
        </Link>

        <Info>Status: {status}</Info>
        <Info>Species: {species}</Info>
        <Info>Gender: {gender}</Info>
        <Info>Origin: {origin.name}</Info>
        <Button onClick={handleCardClose} >X</Button>
      </TextContainer>
    </Container>
    </CardContainer>
  );
}


