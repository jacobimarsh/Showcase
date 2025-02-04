export const SweepMarks = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat,
    circleRadius,
    colorScale
  }) =>
    data.map((d, i) => (
      <circle
        key={i}
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
        fill={colorScale(d.scaling)}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ));
  