import React from "react";

function Search({ setSearch }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
