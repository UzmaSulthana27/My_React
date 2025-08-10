import React from "react";
import "./App.css"
 // You can move styles here

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="logo"
        />
      </div>

      {/* Center - Search */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <button className="search-button">
          🔍
        </button>
      </div>

      {/* Right - Icons */}
      <div className="nav-right">
        <span>🔔</span>
        <span>📹</span>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Profile"
          className="profile"
        />
      </div>
    </header>
  );
};

export default Navbar;
