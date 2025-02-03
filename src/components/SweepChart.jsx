import React, { useEffect, useState } from 'react';
import { GetData } from './GetData';
import { format, scaleLinear } from 'd3';
import { line as d3Line, curveMonotoneX } from 'd3-shape'
import { SweepMarks } from './SweepMarks';
import { SweepAxisLeft } from './SweepAxisLeft';
import ChartControls from './ChartControls'
import SweepAxisBottom from './SweepAxisBottom';

const csvUrl = '/all_meansdats.csv';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = 65;

const SweepChart = () => {
  // 1) Load data (and handle cases if data is still loading or empty)
  const data = GetData(csvUrl);

  // 2) Prepare unique stages
  const uniqueStages = data ? [...new Set(data.map((d) => d.stage))] : [];

  // 3) Slider state (which stage index we’re on)
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = uniqueStages[stageIndex] || '';

  // 4) Play/Pause state
  const [isPlaying, setIsPlaying] = useState(false);

  // 5) useEffect to auto-cycle the stageIndex
  useEffect(() => {
    let intervalId;

    if (isPlaying && uniqueStages.length > 0) {
      intervalId = setInterval(() => {
        setStageIndex((prevIndex) =>
          // Loop back to 0 if we reach the end
          prevIndex >= uniqueStages.length - 1 ? 0 : prevIndex + 1
        );
      }, 800); // 1 second; adjust as desired
    }

    // Cleanup: clear the interval when isPlaying is false or component unmounts
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, uniqueStages.length]);

  // 6) If data is not loaded or empty, show a message
  if (!data || data.length === 0) {
    return <div>Loading or no data found...</div>;
  }

  // 7) Filter data for the selected stage
  const filteredData = data.filter((d) => d.stage === currentStage);

  // 8) Set up chart dimensions, scales, etc.
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.distance;
  const xAxisLabel = 'Distance from sweep (bp)';
  const yValue = (d) => d.mean_pi;
  const yAxisLabel = 'Mean diversity (pi)';

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) =>
    siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear().domain([0, 5000]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([0, 0.012]).range([innerHeight, 0]);

// Prepare a line generator for mean_H1
const filteredLineData = filteredData
  .filter(d => d.mean_H1 !== null)
  .sort((a, b) => a.distance - b.distance);
const lineGenerator = d3Line()
  .x(d => xScale(d.distance))   // X is distance
  .y(d => yScale(d.mean_H1))    // Y is mean_H1
  // .curve(curveMonotoneX);
  // 9) Render

  return (
    <div>
      {/* Slider + Stage label + Play/Pause buttons */}
        <ChartControls
        currentStage={currentStage}
        stageIndex={stageIndex}
        uniqueStagesLength={uniqueStages.length}
        setStageIndex={setStageIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* Chart */}
      <svg width={width} height={height} >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* X Axis */}
          <SweepAxisBottom
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
          <SweepAxisLeft
            yScale={yScale}
            innerWidth={innerWidth}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
            fill="#635F5D"
            fontSize="1.5em"
          >
            {yAxisLabel}
          </text>

          {/* Data Marks for the filtered data */}
          <SweepMarks
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={4}
          />

          {/* NEW: mean_H1 line */}
          <path
            d={lineGenerator(filteredLineData)}
            fill="none"
            stroke="red"
            strokeWidth={2}
          />
        </g>
      </svg>
    </div>
  );
};

export default SweepChart;
