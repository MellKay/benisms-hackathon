import React, { useState } from "react";

const dummyData = [
  {
    name: "Dolla Squigs",
    description: "The unofficial bootcamp #3 term for string interpolation.",
  },
  {
    name: "Baby Function",
    description:
      "Created by Vini and then shamelessly stolen by Ben, this is an alternative name for fat arrow functions.",
  },
  {
    name: "Binny Pong Quizzy Song",
    description:
      "One of the many energizers Ben came up with; It involves throwing a ball into a bin, and if it lands in Ben will sing you a question and you must get both the answer and the song correct for points.",
  },
];

function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  function clearSearch() {
    setSearchTerm("");
  }

  return (
    <div className="wrapper">
      <h2 className="tabTitle"> Dictionary </h2>
      <input
        placeholder="Search For a Benism..."
        className="searchBar"
        onChange={handleChange}
        value={searchTerm}
        onBlur={clearSearch}
      />
      {dummyData.map((item) => {
        return (
          <>
            <p style={{ fontWeight: "bold" }}> {item.name}: </p>
            <p> {item.description}</p>
            <hr style={{ width: "90%" }} />
          </>
        );
      })}
    </div>
  );
}

export default Dictionary;
