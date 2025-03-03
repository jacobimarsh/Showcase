import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SFTooltip = ({ open }) => {
  return (
    <Tooltip 
      title="Simulated population size is divided by X for tractability while preserving popgen dynamics. For sweeps of this strength, rescaling does not bias hitchhiking effects!" 
      placement="right"
      open={open}
      slotProps={{
        tooltip: { sx: { fontSize: "14px" } },
      }}
    >
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
