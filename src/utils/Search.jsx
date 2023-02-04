import React from "react";

function Search({ setSearch }) {
  return (
    <input
      type="text"
      className="search-input-section"
      placeholder="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
