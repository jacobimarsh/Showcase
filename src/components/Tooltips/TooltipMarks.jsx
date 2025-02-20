import React from "react";

const TooltipMarks = () => {
  // Hardcoded absolute values for the mark and line
  const circleX = 816;
  const circleY = 162.8; // 143, the absolute y-position for the circle
  const circleRadius = 4.5;
  const circleFill = "#3e3c38";
  const tooltipTitle = "Expected";
  const lineOffset = 8;
  const lineY = circleY - 31; // Absolute horizontal line y-position
  const lineStroke = "#3e3c38";
  const lineStrokeWidth = 2.5;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // so the overlay doesn't intercept mouse events
        zIndex: 2000,
      }}
    >
      <svg width="100%" height="100%">
        <circle
          cx={circleX}
          cy={circleY}
          r={circleRadius}
          fill={circleFill}
        >
          <title>{tooltipTitle}</title>
        </circle>
        <line
          x1={circleX - lineOffset}
          y1={lineY}
          x2={circleX + lineOffset}
          y2={lineY}
          stroke={lineStroke}
          strokeWidth={lineStrokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default TooltipMarks;
