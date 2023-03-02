import React from "react";
import "./nav.css";
function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="#">
            <img src="logo.png" alt="Logo" />
          </a>
        </div>
        <div class="navbar-menu">
          <ul>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <button class="navbar-toggle">
          <span class="navbar-toggle-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
