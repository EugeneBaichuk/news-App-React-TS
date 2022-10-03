import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import HomeIcon from '@mui/icons-material/Home';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import BookIcon from '@mui/icons-material/Book';

import Home from '../../pages/home/Home';

import Navbar from '../navbar';

const drawerWidth = 180;
interface Props {
  window?: () => Window;
}

export default function RespDrawer({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerArr = [
    {text:'Home', icon: (<HomeIcon/>)}, 
    {text:'Hot News', icon: (<NewReleasesIcon/>)}, 
    {text:'Sports', icon: (<SportsFootballIcon/>)}, 
    {text:'Travel', icon: (<LocalAirportIcon/>)}, 
    {text:'Blog', icon: (<BookIcon/>)}, 
  ];

  const drawer = (
    <div>
      <List>
        <Toolbar/>
        {drawerArr.map(({text, icon}) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
          position="fixed"
          sx={{
            width: { sm: "100%" },
            padding: 0,
            ml: { sm: `${drawerWidth}px` },
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar style={{backgroundColor: "white", padding: 0}}>
            <Navbar handleDrawerToggle={handleDrawerToggle}/>
          </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex'}}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Home/>
    </>
  );
}
