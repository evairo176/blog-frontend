import React from "react";
import { Fragment } from "react";

function CategoryFilter({ categories, filterCategory, setFilterCategory }) {
  const handleChekbox = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCategory, input.value];
      setFilterCategory(state);
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
    }
    // setFilterCategory(value)
  };

  return (
    <div>
      <h1>filter category</h1>
      <div className="form-group">
        {categories.map((row, key) => {
          return (
            <Fragment key={key}>
              <input
                type="checkbox"
                value={row}
                onChange={(e) => handleChekbox(e)}
              />
              <p>{row}</p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
