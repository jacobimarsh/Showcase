import { line as d3Line } from 'd3-shape';

const Line = ({ filteredData, xScale, yScale }) => {

// Prepare a line generator for mean_H1
const filteredLineData = filteredData
  .filter(d => d.mean_H1 !== null)
  .sort((a, b) => a.distance - b.distance);
const lineGenerator = d3Line()
  .x(d => xScale(d.distance))   // X is distance
  .y(d => yScale(d.mean_H1))    // Y is mean_H1
  // .curve(curveMonotoneX);

  return (
    <path d={lineGenerator(filteredLineData)} fill="none" stroke="red" strokeWidth={2} />
  );

}

export default Line