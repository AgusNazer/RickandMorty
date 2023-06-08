import React, { useState } from "react";
import styled from "styled-components";
// import SearchBar from "./SearchBar"; 
import {  NavLink } from "react-router-dom";

const Container = styled.div`
  border:1px solid rgba(174, 214, 241, 0.8)

`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-family: "Rick and Morty", sans-serif;
`;

const Input = styled.input`
  border-radius: 25px;
  width: 15em;
  height: 50px;
  
  background-color: rgb(174, 214, 241);
  border: none;
  @media (max-width: 710px) {
    margin-top: 10px;
  }
`;



const Button = styled.button`
  // background-color: rgb(151,206,76);
  background-color: #F0F9EB;
  margin: 10px;
  cursor: pointer;
  border: none;
  width: 10em;
  height: 50px;
  border-radius: 25px;
`;



export default function Nav({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
 // Character random
  const handleRandom = () => {
    const randomID = Math.floor(Math.random() * 826) + 1;
    onSearch(randomID);
  };

  return (
    <Container>
      <Titulo className="tituloTipografia">Rick and Morty</Titulo>
      <Input
        type="search"
        placeholder="        Enter a number (1-826)"
        value={searchValue}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Add</Button>
      <Button onClick={handleRandom}>Add Random</Button>
      
      
      <NavLink to="/about">
        <Button>About</Button>
      </NavLink>
      <NavLink to="/home">
        <Button>Home</Button>
      </NavLink>
      <NavLink to="/favorites">
        <Button>Favorites</Button>
      </NavLink>
      

    </Container>
  );
}

