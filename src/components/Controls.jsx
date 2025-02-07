import React from 'react';

const Controls = ({
  currentStage,
  stageIndex,
  uniqueStagesLength,
  setStageIndex,
  setIsPlaying,
  innerWidth,    // New prop for the plot's inner width
  marginLeft,    // New prop for the left margin
  uniqueScaling,       // Prop: all available scaling categories
  selectedScalings,    // Prop: scaling categories currently toggled on
  setSelectedScalings, // Prop: function to update the selected scalings
}) => {
    // Toggle a scaling category on/off
    const handleCheckboxChange = (scaling) => {
      if (selectedScalings.includes(scaling)) {
        setSelectedScalings(selectedScalings.filter(item => item !== scaling));
      } else {
        setSelectedScalings([...selectedScalings, scaling]);
      }
    };

  return (
  <div style={{ width: innerWidth, marginLeft: `${marginLeft}px`, textAlign: 'center' }}>
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
          {/* Checkboxes for toggling scaling categories */}
          <fieldset style={{ marginBottom: '1rem', border: 'none' }}>
  <legend style={{ marginBottom: '0.5rem' }}>Scaling Categories</legend>
  {uniqueScaling.map((scaling) => (
    <label key={scaling} style={{ marginRight: '1rem' }}>
      <input
        type="checkbox"
        checked={selectedScalings.includes(scaling)}
        onChange={() => handleCheckboxChange(scaling)}
      />
      {scaling}
    </label>
  ))}
</fieldset>
</div>
  );
};

export default Controls;
