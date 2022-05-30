import React from "react";
import Head from "../SectionHead/Head";
import "./Recommendation.css";
import rh1 from "../Assets/rh1.png";
import rh2 from "../Assets/rh2.png";
import rh3 from "../Assets/rh3.png";
import RecorHouse from "./RecorHouse";
import rhh1 from "../Assets/rhh1.png";
import rhh2 from "../Assets/rhh2.png";
import rhh3 from "../Assets/rhh3.png";
import rhh4 from "../Assets/rhh4.png";

const Recommendation = () => {
  const rhInfos = [
    {
      id: 1,
      rhImg: rh1,
      InBg: "imgInfo red",
      InName: "Popular",
      rhName: "Roselands House",
      rhPrice: "35,000.00",
      rhhName: "Dianne Russel",
      rhhInfo: "Manchester, Kentucky",
      rhhImg: rhh1,
    },
    {
      id: 2,
      rhImg: rh2,
      InBg: "imgInfo blue",
      InName: "New House",
      rhName: "Woodland side",
      rhPrice: "20,000.00",
      rhhName: "Robert Fox",
      rhhInfo: " Dr. San Jose, South Dakota",
      rhhImg: rhh2,
    },
    {
      id: 3,
      rhImg: rh3,
      InBg: "imgInfo green",
      InName: "Best Deals",
      rhName: "The old lighthouse",
      rhPrice: "44,000.00",
      rhhName: "Ronald Richards",
      rhhInfo: "Santa Ana, Illinois",
      rhhImg: rhh3,
    },
    {
      id: 4,
      rhImg: rh1,
      InBg: "imgInfo red",
      InName: "Popular",
      rhName: "Cosmo's House",
      rhPrice: "22,000.00",
      rhhName: "Jenny Wilson",
      rhhInfo: "Preston Rd. Inglewood, Maine 98380",
      rhhImg: rhh4,
    },
  ];
  return (
    <div className="recor">
      <div className="topflex">
        <Head
          headClass="head"
          className="smallhead left"
          smallHead="Our Recommendations"
          biggerHead="Featured House"
        />
        <div className="middle">
          <div className="active">
            <svg
              width="18"
              height="17.5"
              viewBox="0 0 18 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 8.83189V17.5C17.9998 17.7719 17.9262 18.0386 17.7868 18.272C17.6475 18.5054 17.4476 18.6968 17.2084 18.8259C16.9916 18.9432 16.7485 19.0031 16.5021 18.9999H11.9967C11.7978 18.9999 11.607 18.9209 11.4664 18.7803C11.3257 18.6396 11.2467 18.4488 11.2467 18.2499V13.7493C11.2467 13.5504 11.1677 13.3596 11.0271 13.2189C10.8864 13.0783 10.6956 12.9993 10.4967 12.9993H7.49673C7.29781 12.9993 7.10705 13.0783 6.9664 13.2189C6.82574 13.3596 6.74673 13.5504 6.74673 13.7493V18.2499C6.74673 18.4488 6.66771 18.6396 6.52706 18.7803C6.3864 18.9209 6.19564 18.9999 5.99673 18.9999H1.5002C1.28754 19.0005 1.07723 18.9556 0.883354 18.8682C0.689475 18.7808 0.516507 18.653 0.37604 18.4934C0.12946 18.2082 -0.00428751 17.8427 8.829e-06 17.4657V8.8318C0.000172265 8.62281 0.0439196 8.41615 0.128457 8.22503C0.212994 8.0339 0.336463 7.86251 0.490978 7.7218L7.99032 0.903078C8.26579 0.650753 8.62579 0.510777 8.99936 0.510742C9.37293 0.510707 9.73296 0.650617 10.0085 0.90289L17.5091 7.72189C17.6636 7.86263 17.787 8.03403 17.8716 8.22515C17.9561 8.41627 17.9998 8.62292 18 8.83189Z" />
            </svg>

            <span>House</span>
          </div>
          <div>
            <span>Villa</span>
          </div>
          <div>
            <span>Apartment</span>
          </div>
        </div>
        <div className="arrows">
          <span style={{ marginRight: "1.6rem" }}>
            <div className="arrow left"></div>
          </span>
          <span>
            <div className="arrow right"></div>
          </span>
        </div>
      </div>
      <RecorHouse rhInfos={rhInfos} />
    </div>
  );
};

export default Recommendation;