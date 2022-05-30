import React from "react";

const InfoFlex = ({ image, top, butt }) => {
  return (
    <div className="infoFlex">
      <div className="left">
        <img src={image} />
      </div>
      <div className="right">
        <div className="downTop">{top}</div>
        <div className="downButt">{butt}</div>
      </div>
    </div>
  );
};

export default InfoFlex;
