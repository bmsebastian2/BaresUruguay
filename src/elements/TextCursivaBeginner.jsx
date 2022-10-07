

const TextCursivaBeginner = ({ name, tamaño, color }) => {
  const style = {
    fontFamily: "Edu VIC WA NT Beginner, cursive",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: `${tamaño}`,
    textAlign: "center",
    margin: "0.5rem",
    color: `${color ? color : "#fff"}`,
  };

  return (
    <p style={style} tamaño={tamaño} color={color}>
      {name}
    </p>
  );
};

export default TextCursivaBeginner;
