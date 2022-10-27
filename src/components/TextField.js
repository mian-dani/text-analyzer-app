import React, { useState } from "react";

function TextField() {
  // States

  const [text, setText] = useState("");

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [buttonText, setButtonText] = useState("Enable Dark Mode");

  // eVENTS fIRE

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTheme = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setButtonText("Enable Dark Mode");
    } else {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setButtonText("Enable Light Mode");
    }
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // Component Return

  return (
    <section style={myStyle}>
      <section className="container">
        {/* Text Box  */}

        <div className="mb-3">
          <h1>Enter text below</h1>
          <textarea
            className="form-control"
            style={myStyle}
            value={text}
            // placeholder="Start writing text........."
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/*  Buttons  */}

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleTheme}>
          {buttonText}
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </section>

      {/* Text Summary  */}

      <section className="container my-3">
        <h2>Text Summary</h2>
        <p>
          Total Words are : <b> {text.split(" ").length}</b>
        </p>
        <p>
          Total characters are : <b>{text.length}</b>
        </p>
      </section>
    </section>
  );
}
export default TextField;
