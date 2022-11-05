import React, { useState } from "react";
import "./css/TextField.css";

function TextField(props) {
  // States

  const bgTheme = props.barMode;
  const textTheme = props.textMode;
  const [text, setText] = useState("");
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

  // const [buttonText, setButtonText] = useState("Enable Dark Mode");

  // eVENTS fIRE

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "converted to upper case");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "converted to lower case");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const handleTheme = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setButtonText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setButtonText("Enable Light Mode");
  //   }
  // };

  const handleClearText = () => {
    setText("");
    props.showAlert("success", "text cleared");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("success", "text copied");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "extra spaces removed");
  };

  // Component Return

  return (
    // style={myStyle}
    <section className="my-2" style={{ backgroundColor: bgTheme }}>
      <section
        className="container"
        style={{ backgroundColor: bgTheme, color: textTheme }}
      >
        {/* Text Box  */}

        <div className="mb-3">
          <h1 style={{ color: textTheme }}>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{ backgroundColor: bgTheme, color: textTheme }}
            // style={myStyle}
            value={text}
            // placeholder="Start writing text........."
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/*  Buttons  */}
        <div className="buttons-div">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          {/* <button className="btn btn-primary mx-2" onClick={handleTheme}>
          {buttonText}
        </button> */}

          <button className="btn btn-primary mx-2" onClick={handleClearText}>
            Clear Text
          </button>

          <button className="btn btn-primary mx-2" onClick={handleCopyText}>
            Copy Text
          </button>

          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </section>

      {/* Text Summary  */}

      <section className="container my-3" style={{ color: textTheme }}>
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
