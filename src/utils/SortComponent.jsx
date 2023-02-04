import React, { useState } from "react";
import { Fragment } from "react";

function SortComponent({ sort, setSort }) {
  const [code, setCode] = useState("Terbaru");
  const onSelectChange = (value) => {
    setSort({ sort: value, order: sort.order });
  };

  const onArrorChange = () => {
    if (sort.order === "asc") {
      setCode("Terbaru");
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
      setCode("Terlama");
    }
  };

  return (
    <Fragment>
      <div className="filter-dwada">
        <select
          name=""
          id=""
          defaultValue={sort.sort}
          onChange={(e) => onSelectChange(e.target.value)}
          className="filter-input-dawd"
        >
          <option value="title">Title</option>
          <option value="category">Category</option>
          <option value="createdAt">Created Date</option>
        </select>
        <button className="btn-filter" onClick={() => onArrorChange()}>
          {code}
        </button>
      </div>
    </Fragment>
  );
}

export default SortComponent;
