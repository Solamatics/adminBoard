import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBagde">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBagde">2</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatarImage"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
