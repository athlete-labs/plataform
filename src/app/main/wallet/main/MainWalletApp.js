import FusePageSimple from '@fuse/core/FusePageSimple';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PoolIcon from '@mui/icons-material/Pool';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import MainWalletAppHeader from './MainWalletAppHeader';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function MainWalletApp() {
  return (
    <Root
      header={<MainWalletAppHeader />}
      content={
        <motion.div
          className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-24 w-full min-w-0 p-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="sm:col-span-12 md:col-span-8">
            <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-12 truncate">
                  Coins
                </Typography>
              </div>
              <div className="text-right">
                <Button variant="outlined" href="#outlined-buttons">
                  Send tokens
                </Button>
              </div>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HdrAutoIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography className="mt-4 text-left text-secondary">
                        Athlete (ATH)
                      </Typography>
                    }
                    secondary={
                      <>
                        <span className="text-3xl font-semibold tracking-tight leading-tight">
                          749.
                        </span>
                        <span className="text-2x1">000000</span>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SportsSoccerIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="SRA05"
                    secondary={
                      <>
                        <span className="text-2xl font-semibold tracking-tight leading-tight">
                          225,049.
                        </span>
                        <span className="text-1x1">000000</span>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MSC01"
                    secondary={
                      <>
                        <span className="text-2xl font-semibold tracking-tight leading-tight">
                          1,120.
                        </span>
                        <span className="text-1x1">550300</span>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SportsBasketballIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="RCZ01"
                    secondary={
                      <>
                        <span className="text-2xl font-semibold tracking-tight leading-tight">
                          520.
                        </span>
                        <span className="text-1x1">920372</span>
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </motion.div>
          <motion.div variants={item} className="sm:col-span-12 md:col-span-4">
            <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start justify-between">Texto</div>
            </Paper>
          </motion.div>
        </motion.div>
      }
    />
  );
}

export default MainWalletApp;
