import React from "react";
import starIcon from "../../assets/Star.svg";

const StarTooltip = () => {
  const containerStyle = {
    position: "absolute",
    left: 525,
    top: 436,
    pointerEvents: "none",
    zIndex: 1000,
    width: 20,  // desired star width
    height: 20, // desired star height
  };

  return (
    <div style={containerStyle}>
      <img src={starIcon} alt="Star" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default StarTooltip;
