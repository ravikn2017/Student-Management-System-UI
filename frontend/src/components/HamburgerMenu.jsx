// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dashboard,
  School,
  People,
  Person,
  AccountBalance,
  Class,
  Assignment,
  DirectionsBus,
  Notifications,
  Settings,
  Help,
  Logout,
  Close,
} from "@mui/icons-material";
import styles from "./HamburgerMenu.module.css";
// import Logger from "../utils/logger.js";

const HamburgerMenu = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Dashboard />, label: "Dashboard", path: "/" },
    { icon: <School />, label: "Students", path: "/students" },
    { icon: <People />, label: "Teachers", path: "/teachers" },
    { icon: <Person />, label: "Parents", path: "/parents" },
    { icon: <AccountBalance />, label: "Account", path: "/account" },
    { icon: <Class />, label: "Class", path: "/class" },
    { icon: <Assignment />, label: "Exam", path: "/exam" },
    { icon: <DirectionsBus />, label: "Transport", path: "/transport" },
    { icon: <Notifications />, label: "Notice", path: "/notice" },
    { icon: <Settings />, label: "Settings", path: "/settings" },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    onToggle(); // Close menu after navigation
  };

  const handleLogout = () => {
    console.log("User logout initiated from hamburger menu");

    // Clear authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    // Close menu
    onToggle();

    // Navigate to login page
    navigate("/login", { replace: true });

    console.log("User logout completed from hamburger menu");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={onToggle} />}

      {/* Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>TRUE Learning Hub</h2>
          <button className={styles.closeButton} onClick={onToggle}>
            <Close />
          </button>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={styles.menuItem}
              onClick={() => handleMenuClick(item.path)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.footer}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <Logout />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
