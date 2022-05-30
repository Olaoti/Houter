import React from "react";
import Logo from "./Logo";
import ad from "../Assets/arrowdown.svg";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="innerFlex">
        <div> About Us</div>
        <div> Article</div>
        <div className="property">
          <div className="head">
            <span>Property</span>{" "}
            <span>
              <img src={ad} alt="" className="iconad" />
            </span>
          </div>
          <ul className="contents">
            <li>Cantara Property</li>
            <li>Cantara Property</li>
            <li>Cantara Property</li>
            <li>Cantara Property</li>
          </ul>
        </div>
        <div className="btnn"> Sign up</div>
      </div>
    </div>
  );
};

export default Header;
