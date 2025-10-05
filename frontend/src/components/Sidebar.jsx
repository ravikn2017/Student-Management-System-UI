import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  ExitToApp,
} from "@mui/icons-material";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>T</div>
        <span className={styles.logoText}>TRUE Learning Hub</span>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`${styles.navItem} ${
              location.pathname === item.path ? styles.active : ""
            }`}
            onClick={() => handleMenuClick(item.path)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.userProfile}>
        <div className={styles.profileImage}>
          <img
            src="https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=U"
            alt="User"
          />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.userName}>K Prerna</div>
          <div className={styles.userRole}>Admin</div>
        </div>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>
        <ExitToApp />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
