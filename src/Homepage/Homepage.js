import React from "react";
import Header from "./Header";
import location from "../Assets/location.svg";
import tl1 from "../Assets/tl1.png";
import tl2 from "../Assets/tl2.png";
import tl3 from "../Assets/tl3.png";
import tl4 from "../Assets/tl4.png";
import homeimg from "../Assets/homeimg.png";
import ad from "../Assets/arrowdown.svg";

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
          <img src={homeimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
