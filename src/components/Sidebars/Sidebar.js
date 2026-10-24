import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ activeView, onViewChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      className={sidebarOpen ? "sidebar sidebar-open" : "sidebar"}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={()=>setSidebarOpen(false)}
    >
      <div
        className={`sidebar-item${activeView === "notes" ? " active-item sidebar-active-item" : ""}`}
        onClick={() => onViewChange("notes")}
      >
        <span className={`material-symbols-outlined hover${activeView === "notes" ? " active" : ""}`}>
          lightbulb
        </span>
        <span className="sidebar-text">Notes</span>
      </div>

      <div
        className={`sidebar-item${activeView === "reminders" ? " active-item sidebar-active-item" : ""}`}
        onClick={() => onViewChange("reminders")}
      >
        <span className={`material-symbols-outlined hover${activeView === "reminders" ? " active" : ""}`}> notifications </span>
        <span className="sidebar-text">Reminders</span>
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> edit </span>
        <span className="sidebar-text">Edit Labels</span>
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> archive </span>
        <span className="sidebar-text">Archive</span>
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> delete </span>
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
};

export default Sidebar;
