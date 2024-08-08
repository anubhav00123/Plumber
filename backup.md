import React from "react";

const WelcomeOne = () => {
  return (
    <>
      <section className="welcome-one">
        <div
          className="welcome-one-foam-shape"
          style={{
            backgroundImage: "url(images/shapes/welcome-one-foam-shape.png)",
          }}
          data-aos="fade-right"
        />
        <div className="welcome-one-shape-1 float-bob-y">
          <img src="images/shapes/welcome-ond-shape-1.png" alt="" />
        </div>
        <div className="welcome-one-shape-2">
          <img src="images/shapes/welcome-ond-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome-one__left">
                <div className="welcome-one__img-box ">
                  <div className="welcome-one__img">
                    <img src="images/girl.jpg" alt="" data-aos="fade-right" />
                  </div>
                  <div className="welcome-one__small-img" data-aos="fade-right">
                    <img
                      src="images/resources/welcome-one-small-img.jpg"
                      alt=""
                      data-aos="fade-up"
                    />
                  </div>
                  <div className="welcome-one__experience">
                    <h3>36</h3>
                    <p>
                      Years of <br /> Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    A Little Introduction
                  </span>
                  <h2 className="section-title__title">
                    We Made Dry Cleaning &amp; Laundry Simple
                  </h2>
                </div>
                <p className="welcome-one__text-1">
                  Aliquam fermentum, enim quis rhon hendrerit, eros ipsum varius
                  mauris.
                </p>
                <p className="welcome-one__text-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  quis nostrud exercitation.
                </p>
                <ul className="list-unstyled welcome-one__points">
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Curabitur eu velit quis erat luctus malesuada quis sit
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>Aliquam fermentum, enim quis rhoncus hendrerit</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>Nullam erat metus, pharetra at tellus et</p>
                    </div>
                  </li>
                </ul>
                <div className="welcome-one__button-call">
                  <a href="about.html" className="thm-btn welcome-one__btn">
                    Discover More <span className="icon-right-arrow" />
                  </a>
                  <div className="welcome-one__call">
                    <div className="welcome-one__call-icon">
                      {/* <span className="icon-telephone" /> */}
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="welcome-one__call-content">
                      <p>Call Us Anytime</p>
                      <a href="tel:9310100200">9310100200</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeOne;
