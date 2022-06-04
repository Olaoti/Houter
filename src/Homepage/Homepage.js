import React from "react";
import Header from "./Header";
import location from "../Assets/location.svg";
import tl1 from "../Assets/tl1.png";
import tl2 from "../Assets/tl2.png";
import tl3 from "../Assets/tl3.png";
import tl4 from "../Assets/tl4.png";
import homeimg from "../Assets/homeimg.png";
import ad from "../Assets/arrowdown.svg";
import rhh1 from "../Assets/rhh1.png";
import rhh2 from "../Assets/rhh2.png";
import rhh3 from "../Assets/rhh3.png";
import rhh4 from "../Assets/rhh4.png";
import shi from "../Assets/shi.png";

const Homepage = () => {
  return (
    <div className="mainhome">
      <Header />
      <div className="container">
        <div className="left">
          <div className="head">
            Find the place to <br />
            live <span> Your dreams</span> <br />
            easily here
          </div>
          <div className="minibody">
            {" "}
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </div>
          <div className="searchflex">
            <div className="icon">
              <img src={location} alt="" />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Search for the location you want"
                id="input"
              />
            </div>
            <div className="btn">
              <span>Search</span>
              <span>
                <img src={ad} alt="" />
              </span>
            </div>
          </div>
          <div className="below minibody">Our partnership</div>
          <div className="belowflex">
            <img src={tl1} alt="" />
            <img src={tl2} alt="" />
            <img src={tl3} alt="" />
            <img src={tl4} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="floatFlex">
            <div className="inFlex">
              <img src={rhh1} alt="" className="rhh1" />
              <img src={rhh2} alt="" className="rhh2" />
              <img src={rhh3} alt="" className="rhh3" />
              <div className="inWord">
                <div className="top">1K+ people</div>
                <div className="bottom">Successfully getting home</div>
              </div>
            </div>
            <div className="inFlex">
              <img src={shi} alt="" className="shi" />
              <div className="inWord">
                <div className="top">56 Houses</div>
                <div className="bottom">Sold Monthly</div>
              </div>
            </div>
            <div className="inFlex">
              <img src={rhh4} alt="" className="rhh4" />
              <div className="inWord">
                <div className="top">4K+</div>
                <div className="bottom">Looking for homes</div>
              </div>
            </div>
          </div>
          <img src={homeimg} alt="" className="homeImg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
