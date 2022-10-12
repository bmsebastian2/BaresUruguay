import React from "react";
import styled from "styled-components";
import Parrafo from "../../elements/TextCursivaBeginner";
import TextShadown from "../../elements/groupTextBarUy/TextShadown";
import { useForm } from "react-hook-form";
import styles from "./ingresarbares.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate } from "react-router-dom";

const ContainerMain = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    140deg,
    rgb(219, 98, 65) 0%,
    rgb(229, 91, 141) 100%
  );
`;
const ContainerMenu = styled.div`
  background: #27282d;
  height: 50vh;
  width: 20%;
  border-radius: 1.5rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 4px 30px -5px rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 50vh;
    width: 80%;
  }
`;

const IngresarBares = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, loginUser } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      console.log("Usuario logeado");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <ContainerMain>
      <ContainerMenu>
        <TextShadown />

        <Parrafo name="Usuario registrado." tamaño="1.2rem" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Ingrese Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Campo obligatorio</span>}

          <input
            type="password"
            placeholder="Ingrese password"
            {...register("password", { required: true })}
          />

          {errors.password && <span>Campo obligatorio</span>}

          <input type="submit" />
        </form>

        <a href="">Registrarme</a>
      </ContainerMenu>
    </ContainerMain>
  );
};

export default IngresarBares;
