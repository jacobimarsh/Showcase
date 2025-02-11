import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Slider from '@mui/material/Slider';

const Controls = ({
  currentStage,
  stageIndex,
  uniqueStagesLength,
  setStageIndex,
  isPlaying,
  setIsPlaying,
  innerWidth,    // New prop for the plot's inner width
  marginLeft,    // New prop for the left margin
}) => {

  // Slider marks
  const marks = Array.from({ length: uniqueStagesLength }, (_, i) => ({
    value: i,
    label: '' // or add a label if available (e.g., uniqueStages[i])
  }));

  return (
  <div style={{ width: innerWidth, marginLeft: `${marginLeft}px`, textAlign: 'center' }}>
    <div className="flex items-center ">
      {/* Play/Pause toggle Button */}
      <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mr-2 px-4 py-2 rounded"
          style={{ transform: 'scale(1.5)' }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* MUI Discrete Slider */}
        <Slider
  value={stageIndex}
  onChange={(event, newValue) => setStageIndex(newValue)}
  min={0}
  max={uniqueStagesLength - 1}
  step={1}
  marks={marks}
  valueLabelDisplay="auto"
  className="flex-grow mx-4"
  sx={{
    color: '#888', // This sets the color of the track and thumb by default
    '& .MuiSlider-thumb': {
      backgroundColor: '#3e3c38',
      boxShadow: 'none',  // Remove default box shadow
      '&:hover': {
        boxShadow: 'none',
      },
      '&.Mui-active': {
        boxShadow: 'none',
      },
      '&.Mui-focusVisible': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-track': {
      backgroundColor: '#3e3c38',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#3e3c38',
    },
    '& .MuiSlider-markLabel': {
      color: '#3e3c38',
    }
  }}
/>
    </div>

        {/* Current stage text */}
        <label className="w-44">{currentStage}</label>
</div>
  );
};

export default Controls;