import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import Parrafo from "../../elements/TextCursivaBeginner";
import Button from "../../elements/ButtonCustom/Button";
import LineColor from "../../elements/LinColor/LineColor";
import styles from "./login.module.css";

const Login = () => {
  const navegate = useNavigate();
  const { user, loginUser, signOutUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    // console.log(email, password);
    try {
      await loginUser(email, password);
      navegate("/IngresarBares/forminput");
    } catch (error) {
      console.log("Error: " + error.code);
    }
  };
  if (user === false) {
    return <p>Loading User...</p>;
  }

  return (
    <>
      {user ? (
        <>
          <Parrafo name="Usuario logeado." tamaño="1.2rem" />
          <div>
            <Button name="Logout" tamaño="7rem" click={signOutUser} />
          </div>
        </>
      ) : (
        <>
          <Parrafo name="Ininicar Sesión:" tamaño="1.5rem" />
          {
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Ingrese Email"
                {...register("email", {
                  required: { value: true, message: "Campo requerido" },
                  pattern: {
                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,15})+$/,
                    message: "Formato de email incorrecto",
                  },
                })}
              />

              {errors.email && <p>{errors.email.message}</p>}

              <input
                type="password"
                placeholder="Ingrese password"
                {...register("password", {
                  required: { value: true, message: "Campo requerido" },
                  minLength: { value: 6, message: "Mínimo 6 caracteres" },
                  maxLength: { value: 15, message: "Máximo 15 caracteres" },
                  onChange: (e) => (e.target.value = e.target.value.trim()),
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <div className="">
                <Button name="Entrar" tamaño="7rem" />
              </div>
            </form>
          }
        </>
      )}

      <LineColor />
      <a href="#">Registrar</a>
    </>
  );
};

export default Login;
