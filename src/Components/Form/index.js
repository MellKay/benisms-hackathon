import React, { useState } from "react";
import "./index.css";

function Form() {
  const [name, setName] = useState("");
  const [definition, setDefinition] = useState("");
  const [posted, setPosted] = useState("Add to Dictionary");

  async function handleClick() {
    const res = await fetch(
      `https://1ho0xiq8l4.execute-api.eu-west-1.amazonaws.com/dev/list`,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          benismName: name,
          benismDef: definition,
        }),
      }
    );
    setPosted("Posted!");
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDefChange(e) {
    setDefinition(e.target.value);
  }
  return (
    <div className="wrapper">
      <h2 className="tabTitle"> Add New Benism </h2>

      <label className="labels">Name of Benism:</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="formInput"
        value={name}
        onChange={handleNameChange}
      />

      <label className="labels">Description:</label>
      <textarea
        placeholder="Description"
        rows="4"
        cols="50"
        className="formInput"
        value={definition}
        onChange={handleDefChange}
      />

      <button className="addButton" onClick={handleClick}>
        {posted}
      </button>
    </div>
  );
}

export default Form;
