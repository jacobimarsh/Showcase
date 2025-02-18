import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import CaratMarks from "./ControlsScripts/CaratMarks.jsx";

const Controls = ({
  currentStage,
  stageIndex,
  uniqueStagesLength,
  setStageIndex,
  isPlaying,
  setIsPlaying,
  innerWidth, // New prop for the plot's inner width
  marginLeft, // New prop for the left margin
}) => {
  // Slider marks
  const marks = Array.from({ length: uniqueStagesLength }, (_, i) => ({
    value: i,
    label: "", // or add a label if available (e.g., uniqueStages[i])
  }));

  return (
    <div
      style={{
        width: innerWidth,
        marginLeft: `${marginLeft}px`,
        textAlign: "center",
      }}
    >
      <div className="flex items-center ">
        {/* Play/Pause toggle Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mr-2 px-4 py-2 rounded"
          style={{ transform: "scale(1.5)" }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* MUI Discrete Slider */}
        <Slider
  value={stageIndex}
  onChange={(event, newValue) => setStageIndex(newValue)}
  onChangeCommitted={(event, newValue) => setIsPlaying(false)}
  min={0}
  max={uniqueStagesLength - 1}
  step={1}
  marks={CaratMarks(marks)}
  valueLabelDisplay="off"
  className="flex-grow mx-4"
  sx={{
    // Remove default bottom spacing on the slider container:
    paddingBottom: 0,
    marginBottom: 0,
    color: "#888",
    "& .MuiSlider-thumb": {
      backgroundColor: "#3e3c38",
      boxShadow: "none",
      "&:hover": { boxShadow: "none" },
      "&.Mui-active": { boxShadow: "none" },
      "&.Mui-focusVisible": { boxShadow: "none" },
    },
    "& .MuiSlider-track": { backgroundColor: "#3e3c38" },
    "& .MuiSlider-mark": { backgroundColor: "#3e3c38" },
    // Override mark label styles to remove extra spacing:
    "& .MuiSlider-markLabel": {
      color: "#3e3c38",
      top: 0,
      marginTop: 0,
    },
  }}
/>

      </div>

      {/* Current stage text */}
      <label className="w-44">{currentStage}</label>
    </div>
  );
};

export default Controls;
