const Spinner = () => {
  const loader = {
    width: "32px",
    height: "72px",
    display: "inline-block",
    left: "5px",
    position: "relative",
    border: "3px solid #fff",
    boxSizing: "border-box",
    color: "#ff3d00",
    // backgroundImage: "linear-gradient(45deg,hsl(240deg 100% 20%) 0%,hsl(289deg 100% 21%) 11%,hsl(315deg 100% 27%) 22%,hsl(329deg 100% 36%) 33%, hsl(337deg 100% 43%) 44%, hsl(357deg 91% 59%) 56%, hsl(17deg 100% 59%) 67%, hsl(34deg 100% 53%) 78%, hsl(45deg 100% 50%) 89%, hsl(55deg 100% 50%) 100%)",
    borderRadius: "0 0 4px 4px",
    transform: "perspective(140px) rotateX(-45deg)",
    animation: `animloader 1.5s linear infinite alternate`,
  };

  const containerSpinner = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <div className="" style={containerSpinner}>
      <span className="" style={loader}></span>
    </div>
  );
};

export default Spinner;
