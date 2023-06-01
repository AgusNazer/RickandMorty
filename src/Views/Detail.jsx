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

const Detail = () => {
  const { detailId } = useParams();
console.log(detailId);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://rickandmortyapi.com/api";

    fetch(`${URL_BASE}/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Esta sería la ficha del personaje de ID {detailId}</h1>
        <p>{character.name}</p>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
        <img src={character.image} alt="img" />
      </div>
    </>
  );
};

export default Detail;



