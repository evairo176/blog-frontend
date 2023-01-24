import React from "react";
import { Fragment } from "react";

function SortComponent({ sort, setSort }) {
  const onSelectChange = (value) => {
    setSort({ sort: value, order: sort.order });
  };
  console.log(sort);
  const onArrorChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <Fragment>
      <select
        name=""
        id=""
        defaultValue={sort.sort}
        onChange={(e) => onSelectChange(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="category">Category</option>
        <option value="createdAt">createdAt</option>
      </select>
      <button className="btn btn-primary" onClick={() => onArrorChange()}>
        {sort.order}
      </button>
    </Fragment>
  );
}

export default SortComponent;
