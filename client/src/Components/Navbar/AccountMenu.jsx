import React from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { FaUser } from "react-icons/fa";
import Avatar from 'react-avatar';

const AccountMenu = () => {
  return (
    <Menu  menuButton={<MenuButton><Avatar facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size="40" round={true} /></MenuButton>} >
      <MenuItem><Link to='/user-profile'>Your Profile</Link></MenuItem>
      <MenuItem><Link to='/notification'>Notification</Link></MenuItem>
      <MenuItem>Trade History</MenuItem>
      <MenuItem>Chat</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

export default AccountMenu;
