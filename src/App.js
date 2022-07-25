import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
    <div id="box">
      <Header />

      <main class="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />

      {/* loader  */}
      {/* <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div> */}
      {/* end loader */}
      {/* about  */}
      {/* <div id="about" className="about">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="about-box">
                <h2>About Us</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look
                </p>
                <a href="Javascript:void(0)">Read More</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="about-box">
                <figure>
                  <img src="images/about.png" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end abouts */}
      {/* upcoming */}
      {/* <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div className="box_text">
                <div className="titlepage">
                  <h2>Upcoming Concerts</h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it lookIt is a long established
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look
                </p>
                <a href="Javascript:void(0)">Read More</a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
              <div className="upcomimg">
                <figure>
                  <img src="images/up.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end upcoming */}
      {/* Gallery */}
      {/* <div id="gallery" className="Gallery">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott">
                  <div className="Gallery_img">
                    <figure>
                      <img src="images/Gallery1.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="hover_box">
                    <ul className="icon_hu">
                      <h3>Music night</h3>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott">
                  <div className="Gallery_img">
                    <figure>
                      <img src="images/Gallery2.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="hover_box">
                    <ul className="icon_hu">
                      <h3>Music night</h3>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott1">
                  <div className="Gallery_img">
                    <figure>
                      <img src="images/Gallery3.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="hover_box">
                    <ul className="icon_hu">
                      <h3>Music night</h3>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="Gallery_img">
                    <figure>
                      <img src="images/Gallery4.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="hover_box">
                    <ul className="icon_hu">
                      <h3>Music night</h3>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="icon/h.png" alt="#" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Gallery_text">
                <div className="titlepage">
                  <h2>Gallery</h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to usin
                </p>
                <a href="Javascript:void(0)">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end Gallery */}
      {/*  footer */}
      {/* <footr>
        <div className="footer ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className="contact_bg">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="titlepage">
                        <h2>Contact us</h2>
                      </div>
                      <div className="col-md-12">
                        <input
                          className="contactus"
                          placeholder="Your Name"
                          type="text"
                          name="Your Name"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          className="contactus"
                          placeholder="Your Email"
                          type="text"
                          name="Your Email"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          className="contactus"
                          placeholder="Your Phone"
                          type="text"
                          name="Your Phone"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="textarea"
                          placeholder="Message"
                          type="text"
                          name="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button className="send">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-12 border_top">
                <form className="news">
                  <h3>Newsletter</h3>
                  <input
                    className="newslatter"
                    placeholder="ENTER YOUR MAIL"
                    type="text"
                    name=" ENTER YOUR MAIL"
                  />
                  <button className="submit">Subscribe</button>
                </form>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                    <div className="address">
                      <ul className="loca">
                        <li>
                          <a href="#">
                            <img src="icon/loc.png" alt="#" />
                          </a>
                          Locations
                        </li>
                        <li>
                          <a href="#">
                            <img src="icon/call.png" alt="#" />
                          </a>
                          +12586954775{" "}
                        </li>
                        <li>
                          <a href="#">
                            <img src="icon/email.png" alt="#" />
                          </a>
                          demo@gmail.com{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                    <ul className="social_link">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <p>
                Copyright 2019 All Right Reserved By{" "}
                <a href="https://html.design/">Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footr> */}
      {/* end footer */}
      {/* Javascript files*/}
      {/* sidebar */}
    </div>
  );
}

export default App;
