import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const LineTooltip = () => {
  return (
    <div style={{ position: "absolute", left: 833, top: 118 }} >
      <Tooltip title="Theoretical expectation (see Methods)" placement="right">
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
    </div>
  );
};

export default LineTooltip;
