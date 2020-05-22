import React from "react";

const dummyData = [
  {
    name: "Dolla Squigs",
    description: "The unofficial bootcamp #3 term for string interpolation.",
  },
  {
    name: "Baby Function",
    descriptions:
      "Created by Vini, this is an alternative name for fat arrow functions.",
  },
];

function Dictionary() {
  return (
    <div className="wrapper">
      <h2 className="tabTitle"> Dictionary </h2>
      {dummyData.map((item) => {
        return <p> {item.name} </p>;
      })}
    </div>
  );
}

export default Dictionary;
