import React from "react";
import '../stylesheets/components/Sidebar.css';
import avatar from "../assets/avatar.png" ;
import iconHome from "../assets/icon-home.svg";
import iconSettings from "../assets/icon-settings.svg";
import iconAccounts from "../assets/icon-accounts.svg";
import iconLock from "../assets/icon-lock.svg";

function Sidebar() {
  return (
    <>
      <button type="button" class="burger" onclick="toggleSidebar()">
        <img src={avatar} class="burger-avatar" alt="icon"/>
        <span class="burger-icon"></span>
      </button>
      <div class="overlay"></div>
      <aside class="sidebar">
        <img class="sidebar-avatar" src={avatar} alt="icon" />
        <div class="sidebar-username">frontendjoe</div>
        <div class="sidebar-role">Frontend Developer</div>
        <nav class="sidebar-menu">
          <button type="button">
            <img src={iconHome} alt="icon" />
            <span>Home</span>
          </button>
          <button type="button">
            <img src={iconSettings} alt="icon" />
            <span>Settings</span>
          </button>
          <button type="button">
            <img src={iconAccounts} alt="icon" />
            <span>Profile</span>
          </button>
        </nav>
        <nav class="sidebar-menu bottom">
          <button type="button">
            <img src={iconLock} alt="icon" />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;