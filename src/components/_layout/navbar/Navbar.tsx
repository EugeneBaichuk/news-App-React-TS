import {ChangeEvent, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../App';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';


import './navbar.css';

type NavbarProps = {
  handleDrawerToggle: () => void;
}

export default function Navbar ({handleDrawerToggle}: NavbarProps) {
  const [searchVal, setSearchVal] = useContext(Context).searchVal;
  const setCurrentSearchVal = useContext(Context).setCurrentSearchVal;
  const navigate = useNavigate();
  const onChangeSearchVal = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
    setIsDisabled(false);
  };
  const [isDisabled, setIsDisabled] = useState(false);

  const onSearch = () => {
    setCurrentSearchVal();
    navigate('/search');
  }

  const onDisabled = () => {
    setIsDisabled(true);
  }


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
      <TextField
          error={isDisabled}
          label={isDisabled ? "the input shouldn't be empty": "Search" }
          id="standard-error-helper-text"
          value={searchVal}
          onChange={onChangeSearchVal}
          variant="standard"
          style={{padding: "0 0 15px 0"}}
        />
        <IconButton type="button" aria-label="search"  onClick={!!searchVal ? onSearch: onDisabled}>
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