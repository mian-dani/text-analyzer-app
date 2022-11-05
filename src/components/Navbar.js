// import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  // const [textColor, setTextColor] = useState("black");

  // if (props.barMode === "white") {
  //   setTextColor("black");
  // } else {
  //   setTextColor("white");
  // }

  return (
    <section>
      <nav className={`navbar navbar-expand-lg  bg-${props.barMode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.textMode}`} href="/">
            Text Box
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textMode}`}
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.textMode}`}
                  to="contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-1"
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckChecked"
                // checked
              />
              <label
                className={`form-check-label mx-1 text-${props.textMode}`}
                htmlFor="flexSwitchCheckChecked"
              >
                Change Theme
              </label>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
