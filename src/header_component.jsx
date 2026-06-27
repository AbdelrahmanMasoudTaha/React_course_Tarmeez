function Header() {
  const headerStyle = {
    backgroundColor: "#07c089ef",
    textAlign: "center",
    color: "white",
    padding: "5px",
    width: "100%",
    boxShadow: "0 5px 13px rgba(0,0,0,0.1)",
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: "white" }}>Masoud challenge 1</h1>
    </header>
  );
}

export default Header;
