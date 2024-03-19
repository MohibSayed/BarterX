import React from "react";
import { Link } from "react-router-dom";
// import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";
import { FaUser } from "react-icons/fa";
import Avatar from "react-avatar";

const AccountMenu = () => {
  const handleLogout = () => {
    // Clear the localStorage when the "Logout" link is clicked
    localStorage.clear();
  };
  return (
    // <Menu
    //   menuButton={
    //     <MenuButton>
    //       <Avatar
    //         facebook-id="invalidfacebookusername"
    //         src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    //         size="40"
    //         round={true}
    //       />
    //     </MenuButton>
    //   }
    // >
    //   <MenuItem>
    //     <Link
    //       to="/user-profile"
    //       style={{ textDecoration: "none", color: "#000" }}
    //     >
    //       Your Profile
    //     </Link>
    //   </MenuItem>
    //   <MenuItem>
    //     <Link
    //       to="/notification"
    //       style={{ textDecoration: "none", color: "#000" }}
    //     >
    //       Notification
    //     </Link>
    //   </MenuItem>
    //   <MenuItem>Trade History</MenuItem>
    //   <MenuItem>Chat</MenuItem>
    //   <MenuItem>
    //     <Link
    //       to="/login"
    //       onClick={handleLogout}
    //       style={{ textDecoration: "none", color: "#000" }}
    //     >
    //       Logout
    //     </Link>
    //   </MenuItem>
    // </Menu>
    <></>
  );
};

export default AccountMenu;
