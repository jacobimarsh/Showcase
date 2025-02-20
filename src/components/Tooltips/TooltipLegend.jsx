import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TooltipMarks from "./TooltipMarks"; // Import the TooltipMarks component

const extraHoverArea = 35; // Change this value to adjust extra hover area in px
const iconWidth = 24;
const totalWidth = extraHoverArea + iconWidth;
const originalLeft = 833; // Original absolute position for the icon

const DotTooltip = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: originalLeft - extraHoverArea, // shift left by extraHoverArea
        top: 118 + 31,
        cursor: "pointer",
      }}
    >
      <Tooltip title="Simulated results" placement="right">
        {/* Container is totalWidth wide with icon right-aligned */}
        <div style={{ display: "flex", width: `${totalWidth}px`, justifyContent: "flex-end" }}>
          <IconButton
            sx={{
              padding: 0,
              width: iconWidth,
              height: 24,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <InfoOutlinedIcon sx={{ color: "#3e3c38", fontSize: 20 }} />
          </IconButton>
        </div>
      </Tooltip>
    </div>
  );
};

const LineTooltip = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: originalLeft - extraHoverArea,
        top: 118,
        cursor: "pointer",
      }}
    >
      <Tooltip title="Theoretical expectation (see Methods)" placement="right">
        <div style={{ display: "flex", width: `${totalWidth}px`, justifyContent: "flex-end" }}>
          <IconButton
            sx={{
              padding: 0,
              width: iconWidth,
              height: 24,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <InfoOutlinedIcon sx={{ color: "#3e3c38", fontSize: 20 }} />
          </IconButton>
        </div>
      </Tooltip>
    </div>
  );
};

const TooltipLegend = () => {
  return (
    <div>
      <TooltipMarks />
      <DotTooltip />
      <LineTooltip />
    </div>
  );
};

export default TooltipLegend;
