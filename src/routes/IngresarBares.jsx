import React from "react";
import styled from "styled-components";
import Parrafo from "../elements/TextCursivaBeginner";
import TextShadown from "../elements/groupTextBarUy/TextShadown";



const ContainerMain = styled.div`

  min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(140deg, rgb(219, 98, 65) 0%, rgb(229, 91, 141) 100%);

`
const ContainerMenu = styled.div`
  background:  #27282d;
  height: 50vh;
  width: 20%;
  border-radius: 1.5rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 4px 30px -5px rgba(0,0,0,0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center  ;


  @media (max-width: 768px){
      height: 50vh;
      width: 80%;

  }


`



const IngresarBares = () => {
  return (
  <ContainerMain>

    <ContainerMenu>

      
   
        <TextShadown/>
      <Parrafo name='Ingrese Usuario y Contraseña.' tamaño='1.7rem'/>



    </ContainerMenu>

  </ContainerMain>
  )
};

export default IngresarBares;
