export const AxisLeft = ({
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
    const labelTicks = [0.002, 0.004, 0.006, 0.008, 0.010, 0.012];
    const allTickValues = [0, 0.001,0.002,0.003,0.004,0.005,0.006,0.007,0.008,0.009,0.010,0.011,0.012, 0.013];
  
    return allTickValues.map((tickValue) => (
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
        {labelTicks.includes(tickValue) ? tickValue.toFixed(3) : ''}
        </text>
      </g>
    ));
  };
  