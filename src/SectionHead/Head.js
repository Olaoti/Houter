import React from "react";

const Head = ({ smallHead, biggerHead, className, headClass }) => {
  return (
    <div>
      <div className={headClass}>
        <div className={className}>
          <div className="line"></div>
          <div className="text">{smallHead}</div>
        </div>
        <div className="biggerhead">{biggerHead}</div>
      </div>
    </div>
  );
};

export default Head;
