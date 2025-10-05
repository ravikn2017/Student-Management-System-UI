import React, { useState, useEffect } from "react";
import {
  Menu,
  AccountCircle,
  Notifications,
  Settings,
  KeyboardArrowDown,
  ArrowBack,
  ExitToApp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import KeyMetrics from "./KeyMetrics";
import NotificationsPanel from "./Notifications";
import styles from "./AppNav.module.css";
//import Logger from "../utils/logger.js";

const AppNav = ({
  showBackButton = false,
  backButtonText = "Back",
  onBack,
  pageName = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Mock unread notifications count (in a real app, this would come from state/API)
  const unreadNotificationsCount = 2;

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        //Logger.debug("User data loaded in AppNav", parsedUserData, "AppNav");
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      // Logger.error(
      //   "Error parsing user data from localStorage",
      //   error,
      //   "AppNav"
      // );
    }
  }, []);

  // Helper function to format user name - directly use API field
  const getUserDisplayName = () => {
    return userData?.name || "User";
  };

  // Helper function to format user role - convert API format to display format
  const getUserRole = () => {
    if (!userData?.role) return "Portfolio Manager";

    const role = userData.role;
    // Convert "manager-portfolio" to "Portfolio Manager"
    if (role === "manager-portfolio") return "Portfolio Manager";
    if (role === "analyst") return "Analyst";
    if (role === "admin") return "Administrator";

    // For any other roles, format them nicely (e.g., "senior-analyst" -> "Senior Analyst")
    return role
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/dashboard"); // Always go back to dashboard
    }
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    // Close user menu
    setIsUserMenuOpen(false);

    // Navigate to login page
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Extreme Left - Back Button */}
          <div className={styles.extremeLeft}>
            {showBackButton && (
              <button className={styles.backButton} onClick={handleBackClick}>
                <ArrowBack />
                <span>{backButtonText}</span>
              </button>
            )}
          </div>

          {/* Center Section */}
          <div className={styles.centerSection}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <Menu />
            </button>

            <div className={styles.logo}>
              <div className={styles.logoContainer}>
                <span className={styles.logoText}>Student Management</span>
                {pageName && (
                  <span className={styles.pageName}>{pageName}</span>
                )}
              </div>
            </div>

            <KeyMetrics />

            <button
              className={styles.notificationButton}
              onClick={toggleNotifications}
            >
              <Notifications />
              {unreadNotificationsCount > 0 && (
                <span className={styles.badge}>{unreadNotificationsCount}</span>
              )}
            </button>
          </div>

          {/* Extreme Right - Portfolio Manager */}
          <div className={styles.extremeRight}>
            <div className={styles.userSection}>
              <button className={styles.userButton} onClick={toggleUserMenu}>
                <AccountCircle className={styles.avatar} />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>
                    {getUserDisplayName()}
                  </span>
                  <span className={styles.userRole}>{getUserRole()}</span>
                </div>
                <KeyboardArrowDown className={styles.dropdownArrow} />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className={styles.userDropdown}>
                  <div className={styles.dropdownItem}>
                    <AccountCircle />
                    <span>Profile</span>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Settings />
                    <span>Settings</span>
                  </div>
                  <div className={styles.dropdownDivider} />
                  <div className={styles.dropdownItem} onClick={handleLogout}>
                    <ExitToApp className={styles.dropdownIcon} />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />

      {/* Notifications Panel */}
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      {/* Overlay for user menu */}
      {isUserMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AppNav;
