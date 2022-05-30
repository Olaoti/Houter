import React from "react";
import "./Recommendation.css";
import InfoFlex from "../InfoFlex";
const RecorHouse = ({ rhInfos }) => {
  return (
    <div className="recorHouse">
      {rhInfos.map((rhInfo) => (
        <div className="wrapper" key={rhInfo.id}>
          <div className="image">
            <span className={rhInfo.InBg}>{rhInfo.InName}</span>
            <img src={rhInfo.rhImg} alt="" />
          </div>
          <div className="rhName">{rhInfo.rhName}</div>
          <div className="rhPrice">$ {rhInfo.rhPrice}</div>
          <InfoFlex
            image={rhInfo.rhhImg}
            top={rhInfo.rhhName}
            butt={rhInfo.rhhInfo}
          />
        </div>
      ))}
    </div>
  );
};

export default RecorHouse;
