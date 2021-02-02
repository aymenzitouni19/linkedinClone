import React from "react";
import "./Header.css";
import {
  SupervisorAccount as SupervisorAccountIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  BusinessCenter as BuisnessCenterIcon,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1612259722~hmac=65cbb567addc1143983d1b14b4055b12"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BuisnessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
