import React from "react";

function Filter({ setCategory }) {
  return (
    <div className="filter">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Clothing")}>Clothing</button>
    </div>
  );
}

export default Filter;