import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/IngresarBares/login" />;
  } else {
    return children;
  }
};

export default RequireAuth;
