import { Box, Backdrop, SpeedDial, SpeedDialAction } from '@mui/material'
import { useState } from "react";
import { AddIcCall, Call, Email, LinkedIn, WhatsApp } from "@mui/icons-material";

function SpeedDialComponent() {
  const actions = [
    { icon: <Call />, name: 'Call' },
    { icon: <WhatsApp />, name: 'WhatsApp' },
    { icon: <Email />, name: 'zoharerel@gmail.com' },
    { icon: <LinkedIn />, name: 'LinkedIn' },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="SpeedDialComponent" component={'span'} sx={{
      height: 'fit-content',
      transform: 'translateZ(1ch)',
      flexGrow: 1,
      position: 'fixed',
      top: '20vh',
      right: '1vw',
      display: 'flex',
      zIndex: 100
    }}>
      <Backdrop sx={{ backgroundColor: 'transparent' }} open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'relative', display: 'flex' }}
        icon={<AddIcCall />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              if (action.name === "Call") {
                return window.open('tel:0584006014', '_self');
              }
              else if (action.name === "WhatsApp") {
                return window.open('https://wa.me/972584006014', 'blank');
              }
              else if (action.name === "LinkedIn") {
                return window.open('https://www.linkedin.com/in/erel-zohar-0a15b6216', 'blank');
              }
              else if (action.name === "zoharerel@gmail.com") {
                return window.open('mailto: zoharerel@gmail.com', '_self');
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>

  );
}

export default SpeedDialComponent;




