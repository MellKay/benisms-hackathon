import React from "react";
import "./tabs.css";

function Tabs() {
  return (
    <div className="tabs">
      <div className="tab">
        <small> Dictionary </small>
      </div>
      <div className="tab">
        <small> Add New Benism </small>
      </div>
      <div className="tab">
        <small> T.A.G </small>
      </div>
    </div>
  );
}

export default Tabs;
