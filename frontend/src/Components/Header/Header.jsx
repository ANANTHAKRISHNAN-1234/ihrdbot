import React from "react";
import "./Header.css";
import DLToggle from "../DLToggle/DLToggle";
function Header() {
  return (
    <div className="row  text-white p-3 nheader">
      <div className="col-md-6 col-3">
        <h2>IHRD CHATBOT</h2>
      </div>
      <nav className="col-md-6 col-9 ">
        <ul className="nav">
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="nav-item">Choose..</li>
          <li className="nav-item">
            <DLToggle />
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
