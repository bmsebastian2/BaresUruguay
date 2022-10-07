const Button = ({ name, tamaño }) => {
  const style = {
    backgroundColor: "rgb(29, 38, 48)",
    color: "white",
    border: "3px solid #fff",
    height: "5vh",
    borderRadius: "25px",
    margin: "1rem",
    width: `${tamaño}`,
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "1px",
  };
  return <button style={style}>{name}</button>;
};

export default Button;
