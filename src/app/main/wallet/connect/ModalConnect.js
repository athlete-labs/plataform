import React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LinkBox from 'app/theme-layouts/shared-components/LinkBox';

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
    bgcolor: 'background.default',
    boxShadow: 24,
    opacity: 0.99,
    p: 4,
  };

  const toggleLink = (e) => {
    if (!e.currentTarget.classList.contains('linkBoxDisabled')) {
      Array.from(e.currentTarget.parentElement.children).forEach((element) => {
        element.classList.remove('linkBoxActive');
        if (!element.classList.contains('linkBoxDisabled')) {
          element.classList.add('linkBoxInative');
        }
      });
      e.currentTarget.classList.remove('linkBoxInative');
      e.currentTarget.classList.add('linkBoxActive');
    }
  };

  const handleConnect = (e) => {
    console.log('connect');
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
          <Typography variant="h5">Connect Wallet</Typography>
          <br />
          <Typography>1. Accept</Typography>
          <div>
            <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            <span>
              I read and accept the
              <Link className="p-4" href="/terms" target="_blank">
                Terms of Service
              </Link>
              and
              <Link className="p-4" href="/privacy" target="_blank">
                Privacy Policy
              </Link>
            </span>
          </div>
          <Typography>2. Choose Network</Typography>
          <div className="grid grid-cols-3 gap-12 w-full min-w-0 p-12">
            <LinkBox
              className="p-32 w-160 linkBoxDisabled"
              src="assets/icons/ethereum.svg"
              alt="Ehtereum"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxDisabled"
              src="assets/icons/bnbchain.svg"
              alt="BNB Chain"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxInative"
              src="assets/icons/polygon.svg"
              alt="Polygon"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxInative"
              src="assets/icons/fantom.svg"
              alt="Fantom"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxDisabled"
              src="assets/icons/avalanche.svg"
              alt="Avalanche"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxDisabled"
              src="assets/icons/arbitrum.svg"
              alt="Arbitrum"
              onClick={toggleLink}
            />
          </div>
          <Typography>3. Choose Wallet</Typography>
          <div className="grid grid-cols-3 gap-12 w-full min-w-0 p-12">
            <LinkBox
              className="p-32 w-160 linkBoxInative"
              src="assets/icons/metamask.svg"
              alt="Metamask"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxDisabled"
              src="assets/icons/bnbchain.svg"
              alt="Binance Wallet"
              onClick={toggleLink}
            />
            <LinkBox
              className="p-32 w-160 linkBoxInative"
              src="assets/icons/walletconnect.svg"
              alt="WalletConnect"
              onClick={toggleLink}
            />
          </div>
          <br />
          <div align="right" className="gap-12 p-12">
            <Button
              onClick={handleConnect}
              className="whitespace-nowrap"
              variant="contained"
              color="primary"
            >
              Connect
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ModalConnect;
