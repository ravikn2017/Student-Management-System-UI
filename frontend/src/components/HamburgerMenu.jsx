// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Business,
  TrendingUp,
  AccountBalance,
  PieChart,
  Settings,
  Help,
  Logout,
  Close,
  BarChart,
  MonetizationOn,
  FolderOpen,
  ShowChart,
  Timeline,
} from "@mui/icons-material";
import styles from "./HamburgerMenu.module.css";
// import Logger from "../utils/logger.js";

const HamburgerMenu = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <Business />,
      label: "Student Details",
      path: "/student/details",
    },
    {
      icon: <ShowChart />,
      label: "Academic Records",
      path: "/academic-records",
    },
    {
      icon: <BarChart />,
      label: "Grades & Performance",
      path: "/grades",
    },
    {
      icon: <MonetizationOn />,
      label: "Attendance",
      path: "/attendance",
    },
    {
      icon: <Timeline />,
      label: "Course History",
      path: "/course-history",
    },
    {
      icon: <FolderOpen />,
      label: "Student Portfolio",
      path: "/student-portfolio",
    },
    { icon: <AccountBalance />, label: "Academic Reports", path: "/reports" },
    { icon: <PieChart />, label: "Analytics", path: "/analytics" },
    { icon: <Settings />, label: "Settings", path: "/settings" },
    { icon: <Help />, label: "Help & Support", path: "/help" },
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
