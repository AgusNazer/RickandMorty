import { useState } from "react";


const validate = (userData, setErrors, errors) => {
  if ( !userData.email) setErrors({...errors, email: "Email Vacío"});
  else{
       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) 
  setErrors({...errors, email:""})
  else setErrors({...errors, email:"Email inválido."})
  

};
};

const Form = () => {

 const [userData, setUserData] = useState({
  email:"",
  password:""
});




  const [errors, setErrors] = useState({
  email: [],
  password: ""
});

const handleChange = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setUserData({ ...userData, [property]: value});
  validate ({...userData, [property]: value}, setErrors, errors);
};

const submitHandler = (e) =>{
  e.preventDefault();
  alert("Login exitoso")
}
    return(
     <>
    <form onSubmit={submitHandler}>

      <div>    
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} type="text" name="email" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="email" name="email" />
      </div>
        {/* <label for="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea> */}
    
        <button>Login</button>
    </form>
    </>
    )
};

export default Form;