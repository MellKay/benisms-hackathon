import React from "react";

function Form() {
  return (
    <div className="wrapper">
      <form className="f1">
        <label>
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
      </form>
      <form className="f2">
        <label>
          Description:
          <textarea placeholder="Description" rows="4" cols="50" />
        </label>
      </form>
      <button type="submit"> Submit</button>
    </div>
  );
}

export default Form;
