import React, { useState } from "react";
import "./tabs.css";
import { Link } from "react-router-dom";

function Tabs() {
  const [dictionaryIsClicked, setDictionaryIsClicked] = useState(true);
  const [addIsClicked, setAddIsClicked] = useState(false);
  const [tagIsClicked, setTagIsClicked] = useState(false);

  function handleDictionaryClick() {
    setDictionaryIsClicked(true);
    setAddIsClicked(false);
    setTagIsClicked(false);
  }
  function handleAddClick() {
    setDictionaryIsClicked(false);
    setAddIsClicked(true);
    setTagIsClicked(false);
  }
  function handleTagClick() {
    setDictionaryIsClicked(false);
    setAddIsClicked(false);
    setTagIsClicked(true);
  }

  return (
    <div className="tabs">
      <Link to="/" className="links">
        <div
          className="tab"
          style={
            dictionaryIsClicked
              ? null
              : { backgroundColor: "rgb(250, 250, 250)", fontWeight: "normal" }
          }
          onClick={handleDictionaryClick}
        >
          <small> Dictionary </small>
        </div>
      </Link>
      <Link to="/add" className="links">
        <div
          className="tab"
          style={
            addIsClicked
              ? null
              : { backgroundColor: "rgb(250, 250, 250)", fontWeight: "normal" }
          }
          onClick={handleAddClick}
        >
          <small> Add New Benism </small>
        </div>
      </Link>
      <Link to="/tag" className="links">
        <div
          className="tab"
          style={
            tagIsClicked
              ? null
              : { backgroundColor: "rgb(250, 250, 250)", fontWeight: "normal" }
          }
          onClick={handleTagClick}
        >
          <small> T.A.G </small>
        </div>
      </Link>
    </div>
  );
}

export default Tabs;
