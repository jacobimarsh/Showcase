import React, { useState } from "react";
import starIcon from "../../assets/Star.svg";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const StarTooltip = () => {
  const [open, setOpen] = useState(false);

  const containerStyle = {
    position: "absolute",
    left: 525,
    top: 436,
    transform: "translateX(-42.5px)", // Check when changing marginLeft
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
  };

  const starStyle = {
    width: 20,
    height: 20,
    cursor: "pointer", // indicates interactivity
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img src={starIcon} alt="Star" style={starStyle} />
      <Tooltip
        title={
          <div style={{ textAlign: "center" }}>
            A new beneficial mutation arises here<br />
            and quickly spreads through the population
          </div>
        }
        placement="top-start"
        open={open}
        slotProps={{
          tooltip: { sx: { fontSize: "14px" } },
        }}
        PopperProps={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0,-4], // [skidding, distance]: moves tooltip down by 4px
              },
            },
          ],
        }}
      >
        <IconButton
          sx={{
            padding: 0,
            marginLeft: "3px",
            marginTop: "2px", // adjust the icon's vertical position
            width: 24,
            height: 24,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <InfoOutlinedIcon sx={{ color: "#3e3c38", fontSize: 20 }} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default StarTooltip;
