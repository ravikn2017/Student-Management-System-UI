import React from "react";
import {
  Search,
  Language,
  Mail,
  Notifications,
  KeyboardArrowDown,
} from "@mui/icons-material";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className={styles.centerSection}>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.languageSelector}>
          <Language className={styles.languageIcon} />
          <span className={styles.languageText}>EN</span>
          <KeyboardArrowDown className={styles.dropdownIcon} />
        </div>

        <div className={styles.notificationButton}>
          <Mail className={styles.notificationIcon} />
          <span className={styles.notificationBadge}>1</span>
        </div>

        <div className={styles.notificationButton}>
          <Notifications className={styles.notificationIcon} />
          <span className={styles.notificationBadge}>1</span>
        </div>

        <div className={styles.userProfile}>
          <div className={styles.profileImage}>
            <img
              src="https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=KP"
              alt="K Prerna"
            />
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.userName}>K Prerna</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <KeyboardArrowDown className={styles.dropdownIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
