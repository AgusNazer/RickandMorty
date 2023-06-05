import { useState } from "react";
import styled, {keyframes} from "styled-components";
import validation from "./validation";

const StyledFormContainer = styled.div`
margin-top:5rem;

`

const StyledForm = styled.form`
  width: 30%;
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
// key frames
const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Titulo = styled.h1`
  font-size: 2.2rem;
  // aca el gtlich 
  color: #97ce4c;
  font-family: "Rick and Morty", sans-serif;

  animation: ${moveAnimation} 2s infinite;
  animation-direction: reverse;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
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
width: 12em;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
 
  @media (max-width: 480px) {
    width: 10em;
  }
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


const Form = ({ login }) => {

 const [userData, setUserData] = useState({
  email:"",
  password:""
});




  const [errors, setErrors] = useState({
  email: "",
  password: ""
});

const handleChange = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setUserData({ ...userData, [property]: value});
  // validate ({...userData, [property]: value}, setErrors, errors);
  validation( { ...userData, [property]: value}, errors, setErrors );
};

const submitHandler = (event) =>{
  event.preventDefault();
  login(userData);

  // alert("Login exitoso")
}
    return(
     <>
     <StyledFormContainer/>
    <StyledForm onSubmit={submitHandler}>

      <FormGroup>   
      <Titulo className="tituloTipografia">Welcome to Rick and Morty App</Titulo>
        <Label htmlFor="email">Email:</Label>
        <Input onChange={handleChange} type="text" name="email" placeholder="Email"  value={userData.email}/>
        {/* <span>Ingrese un Email válido</span> */}
        <p>{errors.email}</p>
      </FormGroup> 

      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input onChange={handleChange} type="password" name="password" placeholder="Password"  value={userData.password}/>
        {/* <span>Ingrese una Password válida</span> */}
        <p>{errors.password}</p>
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