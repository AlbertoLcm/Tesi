import React from "react";
import '../stylesheets/components/Sidebar.css';
import avatar from "../assets/avatar.jpg" ;
import iconHome from "../assets/icon-home.svg";
import iconSettings from "../assets/icon-settings.svg";
import iconAccounts from "../assets/icon-accounts.svg";
import iconLock from "../assets/icon-lock.svg";

function Sidebar() {
  return (
    <>
      <button type="button" class="burger" onclick="toggleSidebar()">
        <div className="contAvatar">
          <img src={avatar} class="burger-avatar" alt="icon"/>
        </div>
        <span class="burger-icon"></span>
      </button>
      <div class="overlay"></div>
      <aside class="sidebar">
        <div className="contAvatar">
          <img class="sidebar-avatar" src={avatar} alt="icon" />
        </div>
        <div class="sidebar-username">Nombre</div>
        <div class="sidebar-role">Carrera</div>
        <nav class="sidebar-menu">
          <button type="button">
            <img src={iconHome} alt="icon" />
            <span>Inicio</span>
          </button>
          <button type="button">
            <img src={iconSettings} alt="icon" />
            <span>Ajustes</span>
          </button>
          <button type="button">
            <img src={iconAccounts} alt="icon" />
            <span>Perfil</span>
          </button>
        </nav>
        <nav class="sidebar-menu bottom">
          <button type="button">
            <img src={iconLock} alt="icon" />
            <span>Salir</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;