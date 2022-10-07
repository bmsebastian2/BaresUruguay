import React from "react";

const styled = {
  backgroundColor: "rgb(29, 38, 48)",
  color: "white",
  border: "3px solid #fff",
  width: "211px",
  height: "68px",
  borderRadius: "25px",
  margin: "1rem",
  fontFamily: "Inter",
  fontStyle: "italic",
  fontWeight: "400",
  fontSize: "22px",
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ButtonAncla = ({ enlace, name }) => {
  return (
    <a style={styled} href={enlace} typeof="button">
      <p>{name}</p>
    </a>
  );
};

export default ButtonAncla;
