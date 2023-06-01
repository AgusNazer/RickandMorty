import styled from "styled-components";

const Container = styled.div`
border:2px solid green;

`
const Titulo = styled.h1`

`
const Input = styled.input`
 
`

const Button = styled.button`
  
   
`
export default function SearchBar({onSearch}) {
   return (
      <Container>
         <Titulo>Rick and Morty</Titulo>
         <Input type='search' placeholder="   Enter a number " />
         <Button onClick={ (id) => {onSearch(id)} }>Agregar</Button>
      </Container>
   );
}
