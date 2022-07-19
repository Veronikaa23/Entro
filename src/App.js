import "./App.css";

function App() {
  return (
    <>
      {/* loader  */}
      {/* <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div> */}
      {/* end loader */}
      {/* header */}
      <header>
        {/* header inner */}
        <div className="header-top">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="index.html">
                          <img src="images/logo.png" alt="#" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9">
                  <div className="menu-area">
                    <div className="limit-box">
                      <nav className="main-menu ">
                        <ul className="menu-area-main">
                          <li className="active">
                            {" "}
                            <a href="index.html">Home</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="about.html">About</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="concerts.html">Concerts </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="gallery.html">Gallery</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="contact.html">Contact</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#contact">login</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="last_manu" href="#">
                              <img src="images/search_icon.png" alt="#" />
                            </a>{" "}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end header inner */}
          {/* end header */}
          <section className="slider_section">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text-bg">
                            <span>The Best</span>
                            <h1>MUSIC BAND EVER</h1>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look
                            </p>
                            <a href="#">Music &amp; Entertainment</a>{" "}
                            <a href="#">Buy Tickets </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container ">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text-bg">
                            <span>The Best</span>
                            <h1>MUSIC BAND EVER</h1>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look
                            </p>
                            <a href="#">Music &amp; Entertainment</a>
                            <a href="#">Buy Tickets </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption ">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text-bg">
                            <span>The Best</span>
                            <h1>MUSIC BAND EVER</h1>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look
                            </p>
                            <a href="#">Music &amp; Entertainment</a>{" "}
                            <a href="#">Buy Tickets </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </header>
      {/* about  */}
      <div id="about" className="about">
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
      </div>
      {/* end abouts */}
      {/* upcoming */}
      <div id="upcoming" className="upcoming">
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
      </div>
      {/* end upcoming */}
      {/* Gallery */}
      <div id="gallery" className="Gallery">
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
      </div>
      {/* end Gallery */}
      {/*  footer */}
      <footr>
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
      </footr>
      {/* end footer */}
      {/* Javascript files*/}
      {/* sidebar */}
    </>
  );
}

export default App;
