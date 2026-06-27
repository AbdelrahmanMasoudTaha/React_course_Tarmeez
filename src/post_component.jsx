function PostComponent({ title, body, children }) {
  const postSyle = {
    padding: "20px",
    margin: "25px",
    border: "5px solid teal",
    borderRadius: "5px",
    // width: "80%",
  };

  const lineStyle = {
    width: "85%",
    border: "0",
    height: "3px",
    backgroundColor: "#99aaa2ff",
    margin: "15px auto",
  };

  return (
    <div style={postSyle}>
      <h1>{title}</h1>
      <hr style={lineStyle} />
      <p>{children}</p>
      <p>{body}</p>
    </div>
  );
}

export default PostComponent;
