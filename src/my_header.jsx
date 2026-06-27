function MyHeader() {
  const headsrStyle = {
    backgroundColor: "teal",
    textAlign: "center",
    color: "white",
    padding: "5px",
    height: "200px",
    width: "100%",
    boxShadow: "0 5px 13px rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
  return (
    <div style={headsrStyle}>
      <h1 style={headsrStyle}>It's Masoud</h1>
    </div>
  );
}

export default MyHeader;
