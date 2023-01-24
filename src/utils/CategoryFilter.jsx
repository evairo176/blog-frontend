import React from "react";

function CategoryFilter({ categories, filterCategory, setFilterCategory }) {
  return (
    <div>
      <h1>filter category</h1>
      {categories.map((row, key) => {
        return <div key={key}>{row}</div>;
      })}
    </div>
  );
}

export default CategoryFilter;
