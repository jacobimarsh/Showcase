import React from "react";

const CaratMarks = (marks) => {
  return marks.map((mark, index) => {
    if (index === 6) { // target the 6th mark
      return {
        ...mark,
        style: { backgroundColor: "#3e3c38", position: "relative" },
        label: (
          <span
            style={{
              color: "#3e3c38",
              position: "absolute", // remove it from the normal flow
              top: "-15px", // adjust to position above the slider
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none", // so it doesn't interfere with slider events
            }}
          >
            {mark.label}
            <span
              style={{
                position: "absolute",
                top: "100%", // attaches the caret to the bottom of the label
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "10px solid #3e3c38", // downward-pointing caret
              }}
            />
          </span>
        ),
      };
    }
    return mark;
  });
};

export default CaratMarks;
