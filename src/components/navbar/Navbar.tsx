import React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css';

type NavbarProps = {
  handleDrawerToggle: () => any;
}

export default function Navbar ({handleDrawerToggle}: NavbarProps) {
  return (
    <Box className="navbar">
      <div className="navbar__logo">SuperLogo</div>
      <IconButton aria-label="open drawer" edge="start"
        onClick={handleDrawerToggle}
        sx={{ margin: "10px 20px", display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <div  className="navbar__pos">
        <InputBase
          className='navbar__input'
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <ListItem className="navbar__sign-in" style={{width: 195, color: "#212121"}}>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="Sign in"/>
        </ListItemButton>
      </ListItem>
    </Box>
  );
}