// Chart.jsx
import React from 'react';
import Axes from './ChartScripts/Axes.jsx';
import { Marks } from './ChartScripts/Marks.jsx';
import Line from './ChartScripts/Line.jsx';

const Chart = ({ axesProps, marksProps, lineProps }) => {
  return (
    <svg width={axesProps.svgWidth} height={axesProps.svgHeight}>
      <g transform={`translate(${axesProps.marginLeft}, ${axesProps.marginTop})`}>
        <Axes {...axesProps} />
        <Marks {...marksProps} />
        <Line {...lineProps} />
      </g>
    </svg>
  );
};

export default Chart;
