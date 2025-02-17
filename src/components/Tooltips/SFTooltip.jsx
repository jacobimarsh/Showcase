import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SFTooltip = () => {
  return (
    <Tooltip title="Simulated population size is divided by X for tractability" placement="right">
      <IconButton
        sx={{
          padding: 0,
          width: 24,
          height: 24,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <InfoOutlinedIcon sx={{ color: "#3e3c38", fontSize: 20 }} />
      </IconButton>
    </Tooltip>
  );
};

export default SFTooltip;
