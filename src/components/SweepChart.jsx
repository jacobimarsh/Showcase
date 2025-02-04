import React, { useState } from 'react';
import { GetData } from './GetData';
import { scaleOrdinal, format, scaleLinear } from 'd3';
import { SweepMarks } from './SweepMarks';
import ChartControls from './ChartControls'
import SweepLine from './SweepLine';
import SweepChartAxes from './SweepAxes';
import useAutoPlay from './useAutoPlay';

const csvUrl = '/all_meansdats.csv';
const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = 65;

const SweepChart = () => {
  // Load data and prepare states for cycler
  const data = GetData(csvUrl);
  const uniqueStages = data ? [...new Set(data.map((d) => d.stage))] : [];
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = uniqueStages[stageIndex] || '';
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-cycle the stageIndex when clicked Play
  useAutoPlay({ isPlaying, setStageIndex, uniqueStages });

  // If data is not loaded or empty, show a message
  if (!data || data.length === 0) {
    return <div>Loading or no data found...</div>;
  }

  // Filter data for current stage
  const filteredData = data.filter((d) => d.stage === currentStage); 

  // Chart dimensions, scales, etc.
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.distance;
  const yValue = (d) => d.mean_pi;
  
  const xAxisLabel = 'Distance from sweep (bp)';
  const yAxisLabel = 'Mean diversity (pi)';
  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear().domain([0, 5000]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([0, 0.012]).range([innerHeight, 0]);

  // Colours!
  const uniqueScaling = [...new Set(filteredData.map(d => d.scaling))];
  const colorScale = scaleOrdinal()
    .domain(uniqueScaling)
    .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]); // adjust colors as needed

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
        innerWidth={innerWidth}
        marginLeft={margin.left}
        />
      {/* Chart */}
      <svg width={width} height={height} >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* Axes */}
          <SweepChartAxes
            xScale={xScale}
            yScale={yScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            xAxisLabel={xAxisLabel}
            yAxisLabel={yAxisLabel}
            xAxisTickFormat={xAxisTickFormat}
            xAxisLabelOffset={xAxisLabelOffset}
            yAxisLabelOffset={yAxisLabelOffset}
          />
          {/* Data Marks for the filtered data */}
          <SweepMarks
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={4}
            colorScale={colorScale}
          />
          {/* Stephan 1993 Eq. 13 line of expected recovery slope */}
          <SweepLine 
            filteredData={filteredData} 
            xScale={xScale} 
            yScale={yScale} 
          />
        </g>
      </svg>
    </div>
  );
};

export default SweepChart;
