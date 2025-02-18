export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
  colorScale,
}) => (
  <>
  {data.filter(d => xValue(d) !== 1 && xValue(d) !== -1)
  .map((d, i) => (
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
  ))
}
{/* Dot legend circle */}
<circle
      key="legendMark"
      cx={680}  // 753 (tooltip left) minus 40px
      cy={112 + 31}  // same y position as DotTooltip
      r={circleRadius}
      fill="#3e3c38"
    >
      <title>Expected</title>
    </circle>
        {/* Short horizontal legend line 50px below the dot legend circle */}
        <line
      key="legendLine"
      x1={680 - 8}  // starts 20px left of 680
      y1={112}  // 50px below the dot's y position (112 + 50 = 162)
      x2={680 + 8}  // ends 20px right of 680, for a 40px line
      y2={112}
      stroke="#3e3c38"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </>
)