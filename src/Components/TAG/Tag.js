import React, { useState } from "react";
import "../Form/index.css";
import "./tag.css";

import ben from "./Ben_Character.png";
import chris from "./Chris_Character.png";

const livingThings = [
  "bee",
  "cat",
  "Ben",
  "Pacman",
  "ovenbird",
  "pigeon",
  "dog",
  "clone",
  "ancient mega-sloth",
  "Patrikachu",
];

const objects = [
  "a rubber pancake",
  "a hose",
  "ears",
  "a fake plant",
  "a Pokeball",
  "a beet-route",
  "teppanyaki",
  "jazz",
  "a nice biscuit",
  "cwissyAI",
];

function Tag() {
  const [tagInput, setTagInput] = useState("");
  const [showTag, setShowTag] = useState(false);

  function handleChange(e) {
    setTagInput(e.target.value);
  }

  function handleClick() {
    setShowTag(true);
  }

  function clearInput() {
    setTagInput("");
    setShowTag(false);
  }

  let obj = objects[Math.floor(Math.random() * objects.length)];

  return (
    <>
      <div className="wrapper">
        <h2 className="tabTitle"> Tenuous Analogy Generator </h2>
        <div id="tagInput">
          <input
            value={tagInput}
            onChange={handleChange}
            className="formInput"
            onClick={clearInput}
          />
          <button onClick={handleClick} className="addButton">
            Submit
          </button>
        </div>
      </div>

      {showTag && (
        <>
          <>
            <div className="TAGWrapper">
              <h3>{`Ben says: A ${tagInput} is like ${
                livingThings[Math.floor(Math.random() * livingThings.length)]
              } with ${obj}`}</h3>
            </div>
          </>

          <img
            src={ben}
            alt="ben"
            style={{
              width: "100px",
              position: "absolute",
              top: "300px",
              left: "50px",
            }}
          />
          {obj === "cwissyAI" ? (
            <img
              src={chris}
              alt="chris"
              style={{
                width: "100px",
                position: "absolute",
                right: "-20px",
                top: "70vh",
                transform: "rotate(310deg)",
              }}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default Tag;
