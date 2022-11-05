import React from "react";
import "./css/About.css";

function About() {
  return (
    <div className="main-div">
      <section className="myInfo">
        <div className="bottom-container">
          <section className="container">
            <img
              className="rounded-circle img-fluid"
              src="images/dani.png"
              alt="Profile pic dani"
              width="150px"
              height="150px"
            />
            <h2 style={{ margin: "5px" }}>Danish Ali</h2>
            <p>
              I am a <b> self learning </b> IT guy which have
              <b> keen to learn </b> more and more latest technologies related
              to my filed. <br />
              You can read about me further in <strong> Skills </strong> and
              <b> AboutUs </b> section.
            </p>
          </section>
        </div>

        <hr />
      </section>

      <section className="skills-cards">
        <div className="bottom-container">
          <section className="container">
            <h2>My Skills.</h2>
            <br />
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-sm-12 mt-2 box">
                <div
                  className="  card text-white bg-success"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-images"
                    src="images/developer.jpg"
                    alt="Developer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      I am a FullStack Developer (React, Node.js) .
                    </p>
                    <a href="/" className="btn btn-danger">
                      Click for more!..
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-12 mt-2 box">
                <div
                  className=" card text-white bg-primary"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-images"
                    src="images/appDev.jpg"
                    alt="Developer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mobile App</h5>
                    <p className="card-text">
                      I am a Mobile App Developer (Java, Android Studio).
                    </p>
                    <a href="/" className="btn btn-danger">
                      Click for more!..
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-12 mt-2 box">
                <div
                  className=" card text-white bg-warning"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-images"
                    src="images/gfx2.jpeg"
                    alt="Developer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Graphic Designer</h5>
                    <p className="card-text">
                      I am a Graphic & Logo Designer (Adobe Illustrator).
                    </p>
                    <a href="/" className="btn btn-danger">
                      Click for more!..
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;
