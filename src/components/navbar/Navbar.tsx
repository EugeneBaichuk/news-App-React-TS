import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import './navbar.css';


interface LinkTabProps {
  children?: any;
  label?: any;
  href?: string;
  style?: any;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const link = (
    <div className='login'>
    <span><PersonIcon/></span>
    <span>Sign in</span>
    </div>
  );

  return (
    <Box sx={{ width: '100%', display: "flex", justifyContent:"space-between", position:"fixed" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label={link}>
        </LinkTab>
        <div className="wrapper">
          <div className="nav-border"></div>
        </div>
        <LinkTab label="Home"/>
        <LinkTab label="News" />
        <LinkTab label="Sport"/>
        <LinkTab label="Travel"/>
      </Tabs>
      <div>
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
    </div>
    </Box>
  );
}