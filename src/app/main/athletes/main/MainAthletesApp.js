import FusePageSimple from '@fuse/core/FusePageSimple';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import MainAtlhetesAppHeader from './MainAthletesAppHeader';

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
      header={<MainAtlhetesAppHeader />}
      content={
        <div className="grid grid-cols-12 gap-24 w-full min-w-0 p-24">
          <div className="md:col-span-8">
            <motion.div
              className="grid grid-cols-12 gap-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-01.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={68} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={32} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={77} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={88} />
                    </Box>
                  </div>
                </div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3  p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-02.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Lateral</Typography>
                </div>
                <div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={58} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={70} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={25} />
                    </Box>
                  </div>
                  <div className="flex items-center w-full divide-x py-4">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="determinate" value={50} />
                    </Box>
                  </div>
                </div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-03.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={92} />
                  </Box>
                </div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-04.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={71} />
                  </Box>
                </div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-05.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-06.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-07.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-08.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-09.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-10.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
              <Paper component={motion.div} variants={item} className="md:col-span-3 p-24">
                <div className="md:col-span-3">
                  <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/avatars/male-11.jpg"
                      alt="member"
                    />
                  </div>
                  <Typography className="mt-24 font-medium">Jose da Silva</Typography>
                  <Typography color="text.secondary">Atacante</Typography>
                </div>
                <div className="flex items-center w-full border-t divide-x">lv: 87</div>
              </Paper>
            </motion.div>
          </div>
          <motion.div variants={item} className="md:col-span-4">
            <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-12 truncate">
                  Management
                </Typography>
              </div>
              <Stack direction="row" spacing={2} justifyContent="right">
                <AssignmentIcon fontSize="large" />
              </Stack>
            </Paper>
          </motion.div>
        </div>
      }
    />
  );
}

export default MainWalletApp;
