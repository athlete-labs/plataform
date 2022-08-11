import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import MainWalletAppHeader from './MainWalletAppHeader';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function MainWalletApp() {
  return <Root header={<MainWalletAppHeader />} content={<p>Hello</p>} />;
}

export default MainWalletApp;
