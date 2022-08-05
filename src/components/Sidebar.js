import React from "react";
import {
  BsFillGridFill,
  BsCalendar3,
  BsChatTextFill,
  BsTelephone,
  BsGearFill,
  BsChatLeftDots,
} from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="app">
        <div className="menu-toggle">
          <div className="hamburger">
            <span></span>
          </div>
        </div>

        <aside className="sidebar">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4 mb-3">NeyX</span>
          </a>

          <nav className="menu">
            <a href="#" className="menu-item is-active">
              <BsFillGridFill />
              Home
            </a>
            <a href="#" className="menu-item">
              <BsCalendar3 /> Clients
            </a>
            <a href="#" className="menu-item">
              <BsChatTextFill /> Feedback
            </a>
            <a href="#" className="menu-item">
              <BsTelephone /> Calls
            </a>
            <a href="#" className="menu-item">
              <BsChatLeftDots /> Meetings
            </a>
            <a href="#" className="menu-item">
              <BsGearFill /> Settings
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
