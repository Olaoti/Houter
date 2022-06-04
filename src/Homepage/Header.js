import React, { useState } from "react";
import Logo from "./Logo";
import ad from "../Assets/arrowdown.svg";

const Header = () => {
  const [showContents, setShowContents] = useState(false);
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
            <li>Home</li>
            <li>Villa</li>
            <li>Apartment</li>
          </ul>
        </div>
        <div className="btnn"> Sign up</div>
      </div>
    </div>
  );
};

export default Header;
