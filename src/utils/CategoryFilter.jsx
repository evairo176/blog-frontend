import React from "react";
import { Fragment } from "react";
import { Form } from "react-bootstrap";

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
      <div className="form-group">
        <Fragment>
          <div className="row">
            {categories.map((row, key) => {
              return (
                <div key={key} className="col-6">
                  <Form.Check
                    type="checkbox"
                    value={row}
                    onChange={(e) => handleChekbox(e)}
                    id={`default-${key}`}
                    label={`${row}`}
                  />
                </div>
              );
            })}
          </div>
        </Fragment>
      </div>
    </div>
  );
}

export default CategoryFilter;
