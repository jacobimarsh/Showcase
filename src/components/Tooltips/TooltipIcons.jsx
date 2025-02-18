import React from "react";

const TooltipIcons = ({
  circleX,
  circleY,
  circleRadius,
  circleFill = "#3e3c38",
  tooltipTitle = "Expected",
  lineOffset = 8,
  lineY,
  lineStroke = "#3e3c38",
  lineStrokeWidth = 2.5
}) => (
  <>
    <circle
      key="legendMark"
      cx={circleX}
      cy={circleY}
      r={circleRadius}
      fill={circleFill}
    >
      <title>{tooltipTitle}</title>
    </circle>
    <line
      key="legendLine"
      x1={circleX - lineOffset}
      y1={lineY}
      x2={circleX + lineOffset}
      y2={lineY}
      stroke={lineStroke}
      strokeWidth={lineStrokeWidth}
      strokeLinecap="round"
    />
  </>
);

export default TooltipIcons;
