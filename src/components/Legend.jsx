import React, { useState } from "react";
import SFTooltip from "./Tooltips/SFTooltip";

const Legend = ({
  innerWidth, // Plot's inner width
  marginLeft, // Left margin
  uniqueScaling, // All available scaling categories
  selectedScalings, // Currently toggled scaling categories
  setSelectedScalings, // Function to update the selected scalings
  colorScale,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Toggle tooltip when hovering over the legend container
  const handleMouseEnter = () => setTooltipOpen(true);
  const handleMouseLeave = () => setTooltipOpen(false);

  // Toggle a scaling category on/off
  const handleCheckboxChange = (scaling) => {
    if (selectedScalings.includes(scaling)) {
      setSelectedScalings(selectedScalings.filter((item) => item !== scaling));
    } else {
      setSelectedScalings([...selectedScalings, scaling]);
    }
  };

  return (
    <div
      style={{
        width: innerWidth,
        marginLeft: `${marginLeft}px`,
        textAlign: "center",
      }}
    >
      <fieldset style={{ border: "none" }}>
        <legend
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer", // adds pointer cursor on hover
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Scaling factors</span>
          <div
            style={{
              position: "absolute",
              left: "94%",
              top: "49%",
              transform: "translateX(0px) translateY(-54%)",
            }}
          >
            <SFTooltip open={tooltipOpen} />
          </div>
        </legend>

        {uniqueScaling.map((scaling) => {
          const isChecked = selectedScalings.includes(scaling);
          const currentColor = colorScale(scaling);
          return (
            <button
              key={scaling}
              onClick={() => handleCheckboxChange(scaling)}
              className="mr-2 px-4 py-2 rounded-xl transition duration-200 focus:outline-none"
              style={{
                width: "93px",
                backgroundColor: isChecked ? currentColor : "white",
                color: isChecked ? "white" : currentColor,
                border: `2px solid ${currentColor}`,
              }}
            >
              {scaling}
            </button>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Legend;
