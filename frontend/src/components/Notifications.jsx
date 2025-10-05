import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Info,
  Warning,
  CheckCircle,
  Schedule,
} from "@mui/icons-material";
import styles from "./Notifications.module.css";

const Notifications = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: "alert",
      icon: <TrendingUp />,
      title: "Price Alert Triggered",
      message: "RELIANCE has crossed your target price of ₹2,500",
      time: "2 minutes ago",
      isRead: false,
      severity: "success",
    },
    {
      id: 2,
      type: "warning",
      icon: <TrendingDown />,
      title: "Portfolio Alert",
      message: "Your portfolio is down 2.3% today",
      time: "15 minutes ago",
      isRead: false,
      severity: "warning",
    },
    {
      id: 3,
      type: "info",
      icon: <Info />,
      title: "Market Update",
      message: "NIFTY 50 opens 0.8% higher at 19,425",
      time: "1 hour ago",
      isRead: true,
      severity: "info",
    },
    {
      id: 4,
      type: "success",
      icon: <CheckCircle />,
      title: "Order Executed",
      message: "Buy order for 100 shares of TCS executed at ₹3,245",
      time: "2 hours ago",
      isRead: true,
      severity: "success",
    },
    {
      id: 5,
      type: "reminder",
      icon: <Schedule />,
      title: "Earnings Release",
      message: "HDFC Bank Q2 results scheduled for tomorrow",
      time: "3 hours ago",
      isRead: true,
      severity: "info",
    },
    {
      id: 6,
      type: "alert",
      icon: <Warning />,
      title: "Risk Alert",
      message: "High volatility detected in your tech stocks",
      time: "5 hours ago",
      isRead: true,
      severity: "warning",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const formatTime = (timeString) => {
    return timeString;
  };

  const getNotificationClass = (notification) => {
    let classes = [styles.notificationItem];
    if (!notification.isRead) {
      classes.push(styles.unread);
    }
    classes.push(styles[notification.severity]);
    return classes.join(" ");
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.notificationsPanel}>
        <div className={styles.header}>
          <h3>Notifications</h3>
          {unreadCount > 0 && (
            <span className={styles.unreadBadge}>{unreadCount} new</span>
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.actionButton}>Mark all as read</button>
          <button className={styles.actionButton}>Clear all</button>
        </div>

        <div className={styles.notificationsList}>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={getNotificationClass(notification)}
            >
              <div className={styles.iconContainer}>{notification.icon}</div>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h4 className={styles.title}>{notification.title}</h4>
                  <span className={styles.time}>
                    {formatTime(notification.time)}
                  </span>
                </div>
                <p className={styles.message}>{notification.message}</p>
              </div>
              {!notification.isRead && <div className={styles.unreadDot} />}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAllButton}>
            View All Notifications
          </button>
        </div>
      </div>
    </>
  );
};

export default Notifications;
