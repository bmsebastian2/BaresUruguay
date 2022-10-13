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
  const { user, loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);

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

        <div className="">
          <Button name="Entrar" tamaño="7rem" />
        </div>
      </form>
      <LineColor />
      <a href="#">Registrar</a>
    </>
  );
};

export default Login;
