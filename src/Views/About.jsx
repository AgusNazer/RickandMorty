import React from 'react';
import styled from 'styled-components';


const Titulo = styled.h2`
font-family: roboto:

`

// const Tipografia = styled.p`
// font-family: roboto:
// `


const About = () => {
  return (
    <div>
      <Titulo>About Me</Titulo>
      <p>¡Hola! Soy Agustin Nazer, el creador de esta aplicación. Soy un apasionado desarrollador web y me encanta construir aplicaciones increíbles con React.</p>
      <p>En mi tiempo libre, me gusta explorar nuevas tecnologías, aprender sobre cryptomonedas, blockchain y hacer deporte.</p>
      <p>¡Espero que disfrutes usando esta aplicación!</p>
      {/* Agrega aquí cualquier otra información que quieras mostrar */}
    </div>
  );
};

export default About;
