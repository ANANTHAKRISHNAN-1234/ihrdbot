import React from "react";
import "./DLToggle.css";
function DLToggle() {
  return (
    <div>
      <label className="tswitch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default DLToggle;
