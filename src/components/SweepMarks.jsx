export const SweepMarks = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat,
    circleRadius
  }) =>
    data.map((d, i) => (
      <circle
        key={i}
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
        fill="#137B80"
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ));
  