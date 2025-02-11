import AxisBottom from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

const Axes = ({
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  xAxisLabel,
  yAxisLabel,
  xAxisTickFormat,
  xAxisLabelOffset,
  yAxisLabelOffset,
}) => (
  <>
    {/* X Axis */}
    <AxisBottom
      xScale={xScale}
      innerHeight={innerHeight}
      tickFormat={xAxisTickFormat}
      tickOffset={5}
    />
    <text
      className="axis-label"
      x={innerWidth / 2}
      y={innerHeight + xAxisLabelOffset}
      textAnchor="middle"
      fill="#635F5D"
      fontSize="1.5em"
    >
      {xAxisLabel}
    </text>

    {/* Y Axis */}
    <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
    <text
      className="axis-label"
      textAnchor="middle"
      transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
      fill="#635F5D"
      fontSize="1.5em"
    >
      {yAxisLabel}
    </text>
  </>
);

export default Axes;
