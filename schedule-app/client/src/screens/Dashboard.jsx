import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// https://mui.com/material-ui/react-drawer/#clipped-under-the-app-bar

const drawerWidth = 100;

const Dashboard = ({user}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <div style={{ marginTop: '10px', marginRight: '10px'}}>
            <a href="https://bobatalks.com"><img src={"./Bobatalk-Logo-darkblue.png"} alt="bobtalks logo" style={{width:'50%', height:'50%'}}/></a>
         </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Discover', 'Account', 'Profile'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
            Hi, {user?.firstName} {user?.lastName}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Upcoming Sessions
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Session Settings
        </Typography>
      </Box>
    </Box>
  );
}
export default Dashboard;
