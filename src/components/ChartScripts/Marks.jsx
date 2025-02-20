// import TooltipIcons from "../Tooltips/TooltipIcons"

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
  </>
)