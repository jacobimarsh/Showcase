import React, { useState } from 'react';
import { GetData } from './UtilsScripts/GetData';
import { scaleOrdinal, format, scaleLinear } from 'd3';
import { SweepMarks } from './ChartScripts/Marks';
import ChartControls from './ChartControls'
import SweepLine from './ChartScripts/Line';
import SweepChartAxes from './ChartScripts/Axes';
import useAutoPlay from './ControlsScripts/useAutoPlay';

const csvUrl = '/all_meansdats.csv';
const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = 65;

const desiredOrder = [ // The desired order of the stages!
'New beneficial mutation added',
'Pre-fixation: 0.05 derived allele frequency', 
'Pre-fixation: 0.1 derived allele frequency', 
'Pre-fixation: 0.25 derived allele frequency', 
'Pre-fixation: 0.5 derived allele frequency', 
'Pre-fixation: 0.75 derived allele frequency', 
'Fixation of beneficial mutation', 
'Post-fixation: 0.1N generations', 
'Post-fixation: 0.2N generations', 
'Post-fixation: 0.3N generations', 
'Post-fixation: 0.4N generations', 
'Post-fixation: 0.5N generations', 
'Post-fixation: 0.6N generations', 
'Post-fixation: 0.7N generations', 
'Post-fixation: 0.8N generations', 
'Post-fixation: 0.9N generations', 
'Post-fixation: 1.0N generations', 
'Post-fixation: 1.5N generations', 
'Post-fixation: 2.0N generations', 
'Post-fixation: 2.5N generations', 
'Post-fixation: 3.0N generations', 
'Post-fixation: 3.5N generations', 
'Post-fixation: 4N generations', 
]

const SweepChart = () => {
  // Load data and prepare states for cycler
  const data = GetData(csvUrl) || [];
  const uniqueStages = desiredOrder.filter(stage => data.some(d => d.stage === stage));
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = uniqueStages[stageIndex] || '';
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-cycle the stageIndex when clicked Play
  useAutoPlay({ isPlaying, setStageIndex, uniqueStages });

  // Filter data for current stage
  const filteredData = data.filter((d) => d.stage === currentStage && d.distance <= 5001); 
  
  const uniqueScaling = [...new Set(filteredData.map(d => d.scaling))];
    const [selectedScalings, setSelectedScalings] = useState(uniqueScaling);
    const marksData = filteredData.filter((d) => selectedScalings.includes(d.scaling))
    
  // If data is not loaded or empty, show a message
  if (!data || data.length === 0) {
    return <div>Loading or no data found...</div>;
  }
  
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
  const colorScale = scaleOrdinal()
  .domain(uniqueScaling)
  .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]); // adjust colors as needed

  const chartControlsProps = {
    currentStage,
    stageIndex,
    uniqueStagesLength: uniqueStages.length,
    setStageIndex,
    isPlaying,
    setIsPlaying,
    innerWidth,
    marginLeft: margin.left,
    uniqueScaling,
    selectedScalings,
    setSelectedScalings,
  };

  const chartMarksProps = {
    data: marksData,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat: xAxisTickFormat,
    circleRadius: 4,
    colorScale,
  };

  const chartLineProps = {
    filteredData,
    xScale,
    yScale,
  };

  const chartAxesProps = {
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    xAxisLabel,
    yAxisLabel,
    xAxisTickFormat,
    xAxisLabelOffset,
    yAxisLabelOffset
  }
  // const chartControlsProps = {}
  // const chartControlsProps = {}
  

  return (
    <div>
      {/* Slider + Stage label + Play/Pause buttons */}
        <ChartControls {...chartControlsProps} /> 
      <svg width={width} height={height} > /* Chart container */
        <g transform={`translate(${margin.left},${margin.top})`}>
          <SweepChartAxes {...chartAxesProps} /> /* Axes */
          <SweepMarks {...chartMarksProps} /> /* Dots */
          <SweepLine {...chartLineProps} /> /* Stephan 1993 Eq. 13 line of expected recovery slope */
        </g>
      </svg>
    </div>
  );
};

export default SweepChart;