import React from "react";
import "./index.css";

function Form() {
  return (
    <div className="wrapper">
      <h2 className="tabTitle"> Add New Benism </h2>

      <label className="labels">Name of Benism:</label>
      <input type="text" name="name" placeholder="Name" className="formInput" />

      <label className="labels">Description:</label>
      <textarea
        placeholder="Description"
        rows="4"
        cols="50"
        className="formInput"
      />

      <button className="addButton"> Add To Dictionary </button>
    </div>
  );
}

export default Form;
