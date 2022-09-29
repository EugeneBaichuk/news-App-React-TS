import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import './navbar.css';

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", position:"fixed"}}>
      <ListItem style={{width: 195, color: "#212121", paddingLeft: 0}}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Sign in"/>
          </ListItemButton>
      </ListItem>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px', mr: 10 }} aria-label="search">
          <SearchIcon />
        </IconButton>
    </Box>
  );
}