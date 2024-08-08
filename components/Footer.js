import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <>
        <div className="rts-footer-one footer-bg-one mt--160 pb--85">
          <div className="container">
            <div className="row g-0 bg-cta-footer-one">
              <div className="col-lg-12">
                <div className="bg-cta-footer-one wrapper">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <a href="#" className="logo-area-footer">
                        <img src="images/logo/logo-02.png" alt="logo" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      {/* single contact area start */}
                      <div className="single-cta-area">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <div className="contact-info">
                          <p>Phone Number</p>
                          <a href="tel:+4733378901">(+202) 2156-2145</a>
                        </div>
                      </div>
                      {/* single contact area end */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      {/* single contact area start */}
                      <div className="single-cta-area">
                        <div className="icon">
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="contact-info">
                          <p>Email Us Here</p>
                          <a href="mailto:yourmail@example.com">
                            info@diyer.com
                          </a>
                        </div>
                      </div>
                      {/* single contact area end */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      {/* single contact area start */}
                      <div className="single-cta-area last">
                        <div className="icon">
                          <i className="fa-regular fa-location-dot" />
                        </div>
                        <div className="contact-info">
                          <p>Office Address</p>
                          <a href="https://www.google.com/maps" target="_blank">
                            251 Hilton, Berlin DE
                          </a>
                        </div>
                      </div>
                      {/* single contact area end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt--90">
              <div className="col-lg-12">
                <div className="single-footer-one-wrapper">
                  <div className="single-footer-component first">
                    <div className="title-area">
                      <h5 className="title">About Company</h5>
                    </div>
                    <div className="body">
                      <p className="disc">
                        Centric aplications productize before front end vortals
                        visualize front end is results and value added
                      </p>
                      <div className="rts-social-style-one">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-footer-component">
                    <div className="title-area">
                      <h5 className="title">Useful Links</h5>
                    </div>
                    <div className="body">
                      <div className="pages-footer">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>About Us</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Our Gallery</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Our Services</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Our Team</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Contact Us</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-footer-component">
                    <div className="title-area">
                      <h5 className="title">What We Do</h5>
                    </div>
                    <div className="body">
                      <div className="pages-footer">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Our Service</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Office Service</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Industry Service</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Private Service</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-arrow-right" />
                              <p>Single Service</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-footer-component last">
                    <div className="title-area">
                      <h5 className="title">Photo Gallery</h5>
                    </div>
                    <div className="body">
                      <div className="gallery-footer">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/01.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/02.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/03.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/04.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/05.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/footer/gallery/06.png"
                                alt="gallery"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper">
                  <p>Copyright 2023. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
