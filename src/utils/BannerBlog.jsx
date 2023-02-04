import React from "react";
import banner from "../assets/images/banner.png";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function BannerBlog() {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <section className="header-blog-title-and-banner">
      <Zoom
        scale={0.7}
        slidesToScroll={1}
        slidesToShow={1}
        responsive={responsiveSettings}
      >
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${banner})`, height: "500px" }}>
            <div className="box-banner">
              <div className="title-banner">
                Top 10 must-visit places in <br /> Indonesia: Experience the
                best of <br />
                culture and nature
              </div>
              <br />
              <div className="action-banner">
                <button className="btn-banner">Holiday</button>
                <span className="titik-bulet"></span>
                <span>Posted 5 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${banner})`, height: "500px" }}>
            <div className="box-banner">
              <div className="title-banner">
                Top 10 must-visit places in <br /> Indonesia: Experience the
                best of <br />
                culture and nature
              </div>
              <br />
              <div className="action-banner">
                <button className="btn-banner">Holiday</button>
                <span className="titik-bulet"></span>
                <span>Posted 5 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${banner})`, height: "500px" }}>
            <div className="box-banner">
              <div className="title-banner">
                Top 10 must-visit places in <br /> Indonesia: Experience the
                best of <br />
                culture and nature
              </div>
              <br />
              <div className="action-banner">
                <button className="btn-banner">Holiday</button>
                <span className="titik-bulet"></span>
                <span>Posted 5 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default BannerBlog;
