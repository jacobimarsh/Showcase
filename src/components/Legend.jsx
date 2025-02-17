import React from "react";
import SFTooltip from "./Tooltips/SFTooltip";

const Legend = ({
  innerWidth, // New prop for the plot's inner width
  marginLeft, // New prop for the left margin
  uniqueScaling, // Prop: all available scaling categories
  selectedScalings, // Prop: scaling categories currently toggled on
  setSelectedScalings, // Prop: function to update the selected scalings
  colorScale,
}) => {
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


      {/* Scaling factors toggled as buttons */}
      <fieldset style={{ border: "none" }}>
      <legend
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <span>Scaling factors</span>
          <div
            style={{
              position: "absolute",
              left: "95%",
              top: "49%",
              transform: "translateX(0px) translateY(-54%)",
            }}
          >
            <SFTooltip />
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
