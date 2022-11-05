import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import About from "./components/About";
import Contact from "./components/Contact";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [barMode, setBarMode] = useState("white");
  const [textMode, setTextMode] = useState("black");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (barMode === "white") {
      setBarMode("black");
      setTextMode("white");
      // setAlert({
      //   msg: "Dark mode activated",
      //   type: "Success",
      // });
      showAlert("success", "Dark mode activated");
      // document.body.style.backgroundColor = "grey";
    } else {
      setBarMode("white");
      setTextMode("black");
      // setAlert({
      //   msg: "Dark mode activated",
      //   type: "Success",
      // });
      showAlert("success", "Light mode activated");

      // document.body.style.backgroundColor = "white";
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // return (
  //   <Router>
  //     <div className="">
  //       <Navbar barMode={barMode} textMode={textMode} toggleMode={toggleMode} />
  //       <Alert alert={alert} />

  //       <Routes>
  //         <Route path="/">
  //           <TextField
  //             heading={"Enter text below"}
  //             barMode={barMode}
  //             textMode={textMode}
  //             showAlert={showAlert}
  //           />
  //         </Route>

  //         {/* <Route path="/about">
  //           <About />
  //         </Route> */}
  //       </Routes>
  //     </div>
  //   </Router>
  // );

  return (
    <div className="App-header">
      <BrowserRouter>
        <Navbar barMode={barMode} textMode={textMode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <TextField
                heading={"Enter text below"}
                barMode={barMode}
                textMode={textMode}
                showAlert={showAlert}
              />
            }
            exact
          />

          <Route path="about" element={<About />} exact />
          <Route path="contact" element={<Contact />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
