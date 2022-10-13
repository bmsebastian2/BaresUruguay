import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const FormInputBar = () => {
  const { signOutUser } = useContext(UserContext);
  return (
    <div>
      FormInputBar
      <button onClick={() => signOutUser()}>SALIR</button>
    </div>
  );
};

export default FormInputBar;
