import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Views/About';
import Detail from './Views/Detail';
import { useLocation } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/favorites/Favorites';

function App() {
  
  const [characters, setCharacters] = useState ([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

// CREDENCIALES LOGIN(FAKE)
const email = "agustin.nazer@hotmail.com"
const password = "Agus123"

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
// agregar esta fiuncionalidad
//  const characterRandom = () => {
//   const randomID = Math.floor(Math.random() * 826) + 1;
//   searchCharacter(randomID);
// };

 // Obtén la ubicación actual

const login =(userData)=>{
  if(userData.email === email && userData.password === password){
    setAccess(true);
    navigate("/home");
  }else{
    alert("Credenciales incorrectas")
  }
}
   return (
      <div className= "App">
        
         
         {/* {location.pathname !== '/about' %% <Nac /> renderizo condicional, si estoy parado no se renderiza */}
       {pathname !== "/" &&  <Nav onSearch={searchCharacter} />}
       {/* <Nav onSearch={searchCharacter} /> */}
         <Routes>
        <Route path="/"element={<Form login={login} />} /> 
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
       </Routes>
        {/* agregar el button random  */}
       {/* <button onClick={characterRandom}>Argrear random</button>  */}
      </div>
   );
}

export default App;