import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Views/About';
import Detail from './Views/Detail';

function App() {

   const [characters, setCharacters] = useState ([]);

   const searchCharacter = (characterID) => {
const URL_BASE = "https://rickandmortyapi.com/api/";
// const KEY = 'rick and morty no tiene API KEY';

      if (isNaN(characterID) || characterID > 826 || characterID <= 0) {
        alert('Error: el ID del personaje debe ser un número entre 1 y 826');
        return;
      }
 
    
      fetch(`${URL_BASE}character/${characterID}`)
        .then((res) => res.json())
        .then((data) => setCharacters([...characters, data]));
    };


   const onClose = (id) => {
   const parsedID = parseInt(id);
   const updatedCharacters = characters.filter((character) => character.id !== parsedID);
   setCharacters(updatedCharacters);
 };

   return (
      <div className='App'>
         {/* {location.pathname !== '/about' %% <Nac /> renderizo condicional, si estoy parado no se renderiza */}
         <Nav onSearch={searchCharacter} />
         <Routes>

        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />

         </Routes>
      </div>
   );
}

export default App;


// {/* <Nav onSearch={(characterID) => window.alert(characterID)} /> */}
//          {/* <Card
//             id={Rick.id}
//             name={Rick.name}
//             status={Rick.status}
//             species={Rick.species}
//             gender={Rick.gender}
//             origin={Rick.origin.name}
//             image={Rick.image}
//             onClose={() => window.alert('Emulamos que se cierra la card')}
//          /> */}