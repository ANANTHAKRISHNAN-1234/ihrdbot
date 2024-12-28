import React, { useState } from "react";
import "./Header.css";
import DLToggle from "../DLToggle/DLToggle";
import ClgSelectModal from "../ClgSelectModal/ClgSelectModal";
function Header({ modalOpen, setOpenModal }) {
  return (
    <div
      className={
        modalOpen
          ? "row  text-white p-3 nheader rem-header"
          : "row  text-white p-3 nheader"
      }
    >
      <div className="col-md-4 col-2">
        <h2 className="site-name">CHATBOT</h2>
      </div>
      <nav className="col-md-6 col-10 ">
        <input type="checkbox" id="sidebar-active" />
        <label for="sidebar-active" className="open-sidebar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label for="sidebar-active" className="close-sidebar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
        <ul className="nav">
          <h2>History</h2>
          <div className="res-history">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur dicta error molestiae rerum? Quibusdam ratione quas sunt,
            voluptatem expedita tempora perferendis, tempore nobis totam commodi
            blanditiis doloremque ex iste consequatur vero atque rem impedit
            ipsa quia praesentium consectetur sint iure. Laboriosam aut quidem,
            at, optio deleniti distinctio eius expedita inventore eligendi nulla
            dolorem doloribus odit quos vero modi debitis blanditiis sunt
            tempora aliquid fugit. Itaque velit beatae nobis eius quod nulla
            similique quidem voluptatibus dignissimos labore, magnam nam
            officiis unde. Neque nulla vel animi maiores sunt doloribus commodi
            quis quisquam recusandae sed similique tempora totam, numquam quo
            autem, maxime culpa quia cum fugit. Illum a voluptates aut nesciunt
            vitae iusto dolores. Consequatur quia tempore reprehenderit, ad
            corrupti nam blanditiis.
          </div>
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <a href="#">Choose...</a>
          </li>
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
