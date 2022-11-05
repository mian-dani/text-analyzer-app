import React from "react";
import "./css/Contact.css";

export default function Contact() {
  return (
    <div className="main-div">
      <section className="social-media">
        <div className="bottom-container">
          <section className="container">
            <h2>Feel free to contact!</h2>
            <p>
              You can contact me through my social media plate forms <br />
              or <br />
              you can send your query through website contact us form.
            </p>

            <div>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/profile.php?id=100040545451230"
                  >
                    <img
                      className="icons"
                      src="images/facebook.png"
                      alt="ICon Facebook"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/_mian_dani/"
                  >
                    <img
                      className="icons"
                      src="images/instagram.png"
                      alt="ICon Instagram"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/miandani/"
                  >
                    <img
                      className="icons"
                      src="images/linkedin.png"
                      alt="ICon linked in"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <img
                      className="icons"
                      src="images/twitter.png"
                      alt="ICon Twitter"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <img
                      className="icons"
                      src="images/youtube.png"
                      alt="ICon Youtube"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/mian-dani">
                    <img
                      className="icons"
                      src="images/github2.png"
                      alt="ICon github "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
