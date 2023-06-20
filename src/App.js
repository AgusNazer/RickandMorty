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
// import { email, password } from './Utils/consts';
// import Footer from './components/Footer/Footer';
import ErrorPage from './Views/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux'; // para cerrar de fav
import axios from 'axios';




function App() {
  
  const [characters, setCharacters] = useState ([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();


  const dispatch = useDispatch(); // para borra de favoritos

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

// CREDENCIALES LOGIN(FAKE)
// const email = "agustin.nazer@hotmail.com"
// const password = "Agus123"

   const searchCharacter = (characterID) => {

const URL_BASE = `http://localhost:3001/rickandmorty/character/${characterID}`;


      if (isNaN(characterID) || characterID > 826 || characterID <= 0) {
        alert('Error: el ID del personaje debe ser un número entre 1 y 826');
        return;
      }

      // ARREGLAR
 // Verificar si el personaje ya está en la lista de personajes mostrados, a
 const characterExists = characters.some(character => character.id === characterID);
 if (characterExists) {
   alert('Error: el personaje ya está en la lista');
   return;
 }
    
//       fetch(`${URL_BASE}${characterID}`)
//         .then((res) => res.json())
//         .then((data) => 
        
   
//     {if (data.name) {
//       setCharacters((searchCharacter) => [...searchCharacter, data])
//     }
//   })
//       .catch((error) =>{
//       console.log('hubo un error', error);
//     })

axios(`${URL_BASE}`)
  .then(({data}) => {
    if(data.name) {
        setCharacters((searchCharacter) => [...searchCharacter, data])
    }else{
        window.alert( 'No hay personajes con este ID!')
    }
  })

}
   const onClose = (id) => {
   const parsedID = parseInt(id);
   const updatedCharacters = characters.filter((character) => character.id !== parsedID);
   setCharacters(updatedCharacters);
};

const login = (userData) => {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`)
  .then(({ data }) => {
     const { access } = data;
     setAccess(access);
     access && navigate('/home');
  });
}

   return (
      <div className= "App">
        
         
         {/* {location.pathname !== '/about' %% <Nac /> renderizo condicional, si estoy parado no se renderiza */}
       {pathname !== "/" &&  <Nav onSearch={searchCharacter} />}
       
       {/* <Nav onSearch={searchCharacter} /> */}
         <Routes>
        <Route path="/"element={<Form login={login} />} /> 
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         {/* <Route path="/footer" element={<Footer/>} />  */}
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage  />} />
         

       </Routes>
        {/* agregar el button random  */}
       {/* <button onClick={handleRandom}>Random char</button>  */}
      </div>
   );
}

export default App;