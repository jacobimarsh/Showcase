export const SweepAxisLeft = ({
    yScale,
    innerWidth,
    tickOffset = 3,
  }) => {
    // This is how you might want to delegate
    // the axis rendering to D3.
    // const gRef = useRef();
    // useEffect(() => {
    //   d3.select(gRef.current);
    //   // Render the axis
    // },[yScale]);
  
    return yScale.ticks().map((tickValue) => (
      <g
        key={tickValue}
        className="tick"
        transform={`translate(0,${yScale(
          tickValue
        )})`}
      >
        <line x2={innerWidth} stroke="#C0C0BB" />
        <text
        //   key={tickValue}
          style={{ textAnchor: 'end' }}
          x={-tickOffset}
          dy=".32em"
          fill= "#635F5D"
        >
          {tickValue}
        </text>
      </g>
    ));
  };
  