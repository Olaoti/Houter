import React from "react";
import "./Subscription.css";
import sr1 from "../Assets/sr1.png";
import sr2 from "../Assets/sr2.png";
import sr3 from "../Assets/sr3.png";
import sr4 from "../Assets/sr4.png";
import sl1 from "../Assets/sl1.png";
import sl2 from "../Assets/sl2.png";
import sl3 from "../Assets/sl3.png";
import sl4 from "../Assets/sl4.png";

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="container">
        <div className="backgrounds">
          <img src={sr1} alt="" className="sr1" />
          <img src={sr2} alt="" className="sr2" />
          <img src={sr3} alt="" className="sr3" />
          <img src={sr4} alt="" className="sr4" />
          <img src={sl1} alt="" className="sl1" />
          <img src={sl2} alt="" className="sl2" />
          <img src={sl3} alt="" className="sl3" />
          <img src={sl4} alt="" className="sl4" />
        </div>
        <div className="head">
          Subscribe For More Info <br /> and update from Hounter
        </div>
        <div className="searchflex">
          <div className="icon">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM17 2L10.5 6.47C10.348 6.55777 10.1755 6.60397 10 6.60397C9.82446 6.60397 9.65202 6.55777 9.5 6.47L3 2H17Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your email here" id="input" />
          </div>
          <div className="btn">Subscribe Now</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
