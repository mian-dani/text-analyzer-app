function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
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
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Contact Us
                </a>
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
                id="flexSwitchCheckChecked"
                // checked
              />
              {/* <label className="form-check-label" for="flexSwitchCheckChecked">
                Checked switch checkbox input
              </label> */}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
