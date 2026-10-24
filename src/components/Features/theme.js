import React from "react";
import "./theme.css"

//Cursor Feature : theme selector
const ThemeSelector = ({ theme, onThemeChange }) => (
  <label className="theme-selector">
    <span>Theme</span>
    <select
      aria-label="Theme mode"
      value={theme}
      onChange={(event) => onThemeChange(event.target.value)}
    >
      <option value="light">Light mode</option>
      <option value="dark">Dark mode</option>
    </select>
  </label>
);

// Added by Cursor.
export default ThemeSelector;