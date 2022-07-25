const Home = () => {
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Welcome to ENTRO</h2>
        <h2>Latest events:</h2>
        {/* Display div: with information about every game (if any) */} 
        <div className="event">
          <div className="image-wrap">
            <img src="images/event1.jpg" />
          </div>
          <h3>Music festival</h3>
          <div className="data-buttons">
            <a href="#" className="btn details-btn">
              Details
            </a>
          </div>
        </div>
        <div className="event">
          <div className="image-wrap">
            <img src="images/event2.jpg" />
          </div>
          <h3>Best band ever</h3>
          <div className="data-buttons">
            <a href="#" className="btn details-btn">
              Details
            </a>
          </div>
        </div>
        <div className="event">
          <div className="image-wrap">
            <img src="images/event3.jpg" />
          </div>
          <h3>Rock fest</h3>
          <div className="data-buttons">
            <a href="#" className="btn details-btn">
              Details
            </a>
          </div>
        </div>

        {/* Display paragraph: If there is no games  */} 
        <p className="no-articles">No events yet</p>
      </div>
    </section>

    /* <section className="slider_section">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
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
                      <span>The Best1</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
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
                      <span>The Best2</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
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
                      <span>The Best3</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
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
    </section> */
  );
};

export default Home;
