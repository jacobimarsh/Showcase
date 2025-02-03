import React from 'react';

const ChartControls = ({
  currentStage,
  stageIndex,
  uniqueStagesLength,
  setStageIndex,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div className="flex items-center mb-4">
      {/* Current stage text */}
      <label className="w-30 mr-4">{currentStage}</label>
      

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={uniqueStagesLength - 1}
        value={stageIndex}
        onChange={(e) => setStageIndex(Number(e.target.value))}
        className="flex-grow mx-4"
      />

      {/* Play/Pause Buttons */}
      <button
        onClick={() => setIsPlaying(true)}
        className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Play
      </button>
      <button
        onClick={() => setIsPlaying(false)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Pause
      </button>
    </div>
  );
};

export default ChartControls;
