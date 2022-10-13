import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Parrafo from "../../elements/TextCursivaBeginner";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const navegate = useNavigate();
  const { user, loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      console.log("Usuario logeado");
      navegate("/IngresarBares/forminput");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
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
      <a href="#">Registrar</a>
    </>
  );
};

export default Login;
