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
import Footer from './components/Footer/Footer'


const URL = "http://localhost:3001/rickandmorty/login/";


function App() {
  
  const [characters, setCharacters] = useState ([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(true);
  const navigate = useNavigate();


  const dispatch = useDispatch(); // para borra de favoritos

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

// CREDENCIALES LOGIN(FAKE)
// const email = "agustin.nazer@hotmail.com"
// const password = "Agus123"
console.log('Valor de access al inicio:', access);


   const searchCharacter = async (characterID) => {

    try {

        const URL_BASE = `http://localhost:3001/rickandmorty/character/${characterID}`;
        const {data} = await  axios(`${URL_BASE}`)
       
            if(data.name) {
              setCharacters((searchCharacter) => [...searchCharacter, data]);
   
            };
            
            if (isNaN(characterID) || characterID > 826 || characterID <= 0) {
                alert("Error: el ID del personaje debe ser un número entre 1 y 826");
                return;
            }
   
        // ARREGLAR
        // Verificar si el personaje ya está en la lista de personajes mostrados, a
        const characterExists = characters.some(
          (character) => character.id === characterID
        );
        if (characterExists) {
          alert("Error: el personaje ya está en la lista");
          return;
        }
    
    } catch (error) {
        alert("No hay personajes con este ID!");
        
    }
   };
   
       
    
   const onClose = (id) => {
     const parsedID = parseInt(id);
     const updatedCharacters = characters.filter(
       (character) => character.id !== parsedID
     );
     setCharacters(updatedCharacters);
   };

   // Login con database backend
//    const login = async  (userData) => {
//     try {
//         const { email, password } = userData;
//         const { data } = await axios(URL + `?email=${email}&password=${password}`)
        
        
        
//           const { access } = data;
//         //   console.log('Access value:', access);
//           setAccess(access);
//           access && navigate("/home");

        
//        } catch (error) {
//         console.log(error.message);
//        }
//     };

// login falso frontend validation
const login = async (userData) => {
    try {
      const { email, password } = userData;
  
      // Validación de email: Verificar que el email contenga el caracter '@' y el '.com' o al menos dos letras después del punto.
      const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
      }
  
      // Validación de password: Verificar que el password contenga al menos dos letras y una mayúscula.
      const passwordPattern = /^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[A-Z])/;
      if (!passwordPattern.test(password)) {
        alert("Por favor, ingresa una contraseña con al menos dos letras y una mayúscula.");
        return;
      }
  
      // Simulamos una autenticación exitosa estableciendo siempre el estado "access" en true
      setAccess(true);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  

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
       <Footer/>
      </div>
   );
}

export default App;
































// import { useEffect, useState } from 'react';
// import './App.css';
// import Cards from './components/Cards/Cards.jsx';
// import Nav from './components/Nav/Nav';
// import { Routes, useNavigate } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import About from './Views/About';
// import Detail from './Views/Detail';
// import { useLocation } from 'react-router-dom';
// import Form from './components/Form/Form';
// import Favorites from './components/favorites/Favorites';
// // import { email, password } from './Utils/consts';
// // import Footer from './components/Footer/Footer';
// import ErrorPage from './Views/ErrorPage/ErrorPage';
// import { useDispatch } from 'react-redux'; // para cerrar de fav
// import axios from 'axios';




// function App() {
  
//   const [characters, setCharacters] = useState ([]);
//   const {pathname} = useLocation();
//   const [access, setAccess] = useState(false);
//   const navigate = useNavigate();


//   const dispatch = useDispatch(); // para borra de favoritos

//   useEffect(() => {
//     !access && navigate("/");
//   }, [access]);

// // CREDENCIALES LOGIN(FAKE)
// // const email = "agustin.nazer@hotmail.com"
// // const password = "Agus123"

//    const searchCharacter = (characterID) => {

// const URL_BASE = `http://localhost:3001/rickandmorty/character/${characterID}`;


//       if (isNaN(characterID) || characterID > 826 || characterID <= 0) {
//         alert('Error: el ID del personaje debe ser un número entre 1 y 826');
//         return;
//       }

//       // ARREGLAR
//  // Verificar si el personaje ya está en la lista de personajes mostrados, a
//  const characterExists = characters.some(character => character.id === characterID);
//  if (characterExists) {
//    alert('Error: el personaje ya está en la lista');
//    return;
//  }
    

// axios(`${URL_BASE}`)
//   .then(({data}) => {
//     if(data.name) {
//         setCharacters((searchCharacter) => [...searchCharacter, data])
//     }else{
//         window.alert( 'No hay personajes con este ID!')
//     }
//   })

// }
//    const onClose = (id) => {
//    const parsedID = parseInt(id);
//    const updatedCharacters = characters.filter((character) => character.id !== parsedID);
//    setCharacters(updatedCharacters);
// };

// const login = (userData) => {
//   const { email, password } = userData;
//   const URL = 'http://localhost:3001/rickandmorty/login/';
//   axios(URL + `?email=${email}&password=${password}`)
//   .then(({ data }) => {
//      const { access } = data;
//      setAccess(access);
//      access && navigate('/home');
//   });
// }

//    return (
//       <div className= "App">
        
         
//          {/* {location.pathname !== '/about' %% <Nac /> renderizo condicional, si estoy parado no se renderiza */}
//        {pathname !== "/" &&  <Nav onSearch={searchCharacter} />}
       
//        {/* <Nav onSearch={searchCharacter} /> */}
//          <Routes>
//         <Route path="/"element={<Form login={login} />} /> 
//         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//          {/* <Route path="/footer" element={<Footer/>} />  */}
//         <Route path="/about" element={<About />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="*" element={<ErrorPage  />} />
         

//        </Routes>
//         {/* agregar el button random  */}
//        {/* <button onClick={handleRandom}>Random char</button>  */}
//       </div>
//    );
// }

// export default App;