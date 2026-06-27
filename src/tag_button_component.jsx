import "./tag_button_style.css";

function TagButton({ text = "no text", children }) {
  return (
    <button className="tagButton">
      {text}
      {children}
    </button>
  );
}

export default TagButton;
