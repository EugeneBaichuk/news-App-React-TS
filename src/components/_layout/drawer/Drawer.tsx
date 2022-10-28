import { useDispatch } from "react-redux";
import { setSearchValue } from '../../../slice/searchSlice';
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import { CustomLink } from '../../_common/customLink/CustomLink';
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
import Navbar from '../navbar';
import HomeIcon from '@mui/icons-material/Home';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import BookIcon from '@mui/icons-material/Book';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BiotechIcon from '@mui/icons-material/Biotech';
import {RespDrawerProps} from "../../types"
import {FC} from 'react';
import './drawer.css';
const drawerWidth = 200;

export const RespDrawer: FC<RespDrawerProps> = ({ window }) => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clearSearchForm = () => {
    dispatch(setSearchValue(''));
  }

  const drawerArr = [
    {text:'Home', icon: (<HomeIcon/>), link: '/'}, 
    {text:'Hot News', icon: (<NewReleasesIcon/>), link: 'hotnews'}, 
    {text:'Sports', icon: (<SportsFootballIcon/>), link: 'sports'}, 
    {text:'Business', icon: (<BusinessCenterIcon/>), link: 'business'},
    {text:'Entertainment', icon: (<SportsEsportsIcon/>), link: 'entertainment'},
    {text:'Technology', icon: (<BiotechIcon/>), link: 'technology'},
    {text:'Blog', icon: (<BookIcon/>), link: 'blog'}, 
  ];

  const drawer = (
    <div>
      <List>
        <Toolbar/>
        {drawerArr.map(({text, icon, link}) => (
          <CustomLink key={text} to={link} >
            <ListItem onClick={clearSearchForm} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
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
            zIndex: (theme: any) => theme.zIndex.drawer + 1,
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
      <div className='content'>
        <Outlet/>
      </div>
    </>
  );
}
