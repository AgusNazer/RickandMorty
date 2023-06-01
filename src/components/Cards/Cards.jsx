import Card from '../Card/Card';
import styled from 'styled-components';



const FondoCards = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap:10px;
    margin:5px;
    // background-image: url("./assets/rick-y-morty-en-el-espacio.webp");
    // background-size: cover;
    // background-repeat: no-repeat;
    height: 100vh; 
    width: 100%;
    // border:2px solid blue;

    @media (max-width: 710px) {
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
  }

`;


export default function Cards({characters, onClose}) {
   // const characters = [];
  //  const onClose = () => window.alert('Emulamos que se cierra la card')
   return(

    <FondoCards>
           {characters.map(({id, name, status, species, gender, origin, image}) => {
             return(
        <Card
        
          key={id} // Asegúrate de proporcionar una clave única para cada elemento en el map
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin}
          image={image}
          onClose={onClose}
         />
        );
      })}
   </FondoCards>
  
   );
}
 