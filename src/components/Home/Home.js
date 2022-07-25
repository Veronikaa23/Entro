import { useEffect, useState } from "react";
import * as eventService from "../../services/eventService.js";
import LatestEvents from "./LatestEvents/LatestEvents.js";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getAll().then((result) => {
      setEvents(result);
    });
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Welcome to ENTRO</h2>
        <h2>Latest events:</h2>

        {events.length > 0 ? (
          events.map((x) => <LatestEvents key={x._id} event={x} />)
        ) : (
          <p className="no-articles">No events yet</p>
        )}

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
