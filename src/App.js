import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";

function App() {
  const [barMode, setBarMode] = useState("white");
  const [textMode, setTextMode] = useState("black");

  const toggleMode = () => {
    if (barMode === "white") {
      setBarMode("black");
      setTextMode("white");
      // document.body.style.backgroundColor = "grey";
    } else {
      setBarMode("white");
      setTextMode("black");
      // document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="">
      <Navbar barMode={barMode} textMode={textMode} toggleMode={toggleMode} />
      <TextField
        heading={"Enter text below"}
        barMode={barMode}
        textMode={textMode}
      />
    </div>
  );
}

export default App;
