import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () =>{

   const params = useParams();

   useEffect(() => {

    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    //     if (data.name) {
    //        setCharacter(data);
    //     } else {
    //        window.alert('No hay personajes con ese ID');
    //     }
    //  });
    //  return setCharacter({});

   }, []);

    return(
    <>
    <div>
        <h1>Esta seria la ficha del character de ID {params.id} </h1>
    </div>
    </>

    )
};

export default Detail;


