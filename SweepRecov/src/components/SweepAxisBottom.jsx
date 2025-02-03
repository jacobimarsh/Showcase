import React from "react";

const SweepAxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
  xScale.ticks().map(tickValue => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
      fill="#635F5D"
    >
      <line y2={innerHeight} stroke="#C0C0BB" />
      <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ) 
);
export default SweepAxisBottom
