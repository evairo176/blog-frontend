import React from "react";

function PaginationComponent({ page, total, limit, setPage }) {
  const totalPages = Math.ceil(total / limit);
  // console.log(totalPages);

  const handlePagination = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className="btn-group pagination-dwdj">
      {totalPages > 0 &&
        [...Array(totalPages)].map((row, key) => {
          return (
            <button
              key={key}
              className={`btn-pagination-dwadw ${
                page === key + 1 ? "active-wdwd" : ""
              }`}
              onClick={() => handlePagination(key)}
            >
              {key + 1}
            </button>
          );
        })}
    </div>
  );
}

export default PaginationComponent;
