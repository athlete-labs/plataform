import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function ModalConnect(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    opacity: 0.95,
    p: 4,
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="whitespace-nowrap"
        variant="contained"
        color="primary"
      >
        Connect Wallet
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography gutterBottom>1. Accept</Typography>
          <div>
            <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            <span>
              I read and accept the
              <Link to="/terms" target="_blank">
                Terms of Service
              </Link>
              <Link to="/privacy" target="_blank">
                Privacy Policy
              </Link>
            </span>
          </div>
          <Typography gutterBottom>2. Choose Network</Typography>
          <div className="w-300 h-300 rounded-full">
            <img className="object-cover" src="assets/icons/polygon-matic.svg" alt="matic" />
          </div>
          <Typography gutterBottom>3. Choose Wallet</Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ModalConnect;
