import { useState } from "react";
import styled from "styled-components";

const StyledFormContainer = styled.div`
margin-top:5rem;

`

const StyledForm = styled.form`
  width: 40%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin: 0 auto; 


  padding: 10px;
  background-color: rgba(151,206,76, 0.1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);


  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const Titulo = styled.h1`
  font-size: 2.2rem;
  color: #97ce4c;
  font-family: "Rick and Morty", sans-serif;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 18rem;



  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: rgba(68,40,29, 0.3);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #97ce4c;
  }
`;

const validate = (userData, setErrors, errors) => {
  if ( !userData.email) setErrors({...errors, email: "Email no puede estar vacío"});
  else{
       if (/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) 
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
     <StyledFormContainer/>
    <StyledForm onSubmit={submitHandler}>

      <FormGroup>   
      <Titulo className="tituloTipografia">Welcome to Rick and Morty App</Titulo>
        <Label htmlFor="email">Email:</Label>
        <Input onChange={handleChange} type="text" name="email" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input type="email" name="email" placeholder="Password" />
      </FormGroup>
        {/* <label for="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea> */}
    
        <Button>Login</Button>
    </StyledForm>
    <StyledFormContainer/>
    </>
    )
};

export default Form;