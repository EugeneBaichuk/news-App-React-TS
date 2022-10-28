import {ChangeEvent, useState, FC} from 'react';
import { useNavigate } from 'react-router-dom';
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
import { CustomLink } from '../../_common/customLink/CustomLink';
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue, setSearch, showSearchValue } from '../../../slice/searchSlice';
import {NavbarProps} from "../../types";
import './navbar.css';

const Navbar: FC<NavbarProps> = ({handleDrawerToggle}) => {
  const searchValue = useSelector(showSearchValue);
  const dispatch = useDispatch();

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
    setIsDisabled(false);
  };

  const onSetSearch = () => {
    dispatch(setSearch(searchValue));
    navigate('/search');
  }

  let ls = localStorage.getItem("auth") || "";
  const {name} = JSON.parse(ls);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("auth", JSON.stringify(''));
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const onDisabled = () => {
    setIsDisabled(true);
  }

  return (
    <Box className="navbar">
      <div>
        <div className="navbar__logo">Hello {name}!</div>
      </div>
      
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
          value={searchValue}
          onChange={onChangeSearchValue}
          variant="standard"
          style={{padding: "0 0 15px 0"}}
        />
        <IconButton type="button" aria-label="search"  onClick={!!searchValue ? onSetSearch : onDisabled}>
          <SearchIcon />
        </IconButton>
      </div>
      <CustomLink to="/login">
        <ListItem onClick={handleLogout} className="navbar__sign-in" style={{width: 195, color: "#212121"}}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Log out"/>
          </ListItemButton>
        </ListItem>
      </CustomLink>
    </Box>
  );
}

export default Navbar; 