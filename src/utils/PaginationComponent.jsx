import React from "react";
import { array } from "yup";

function PaginationComponent({ page, total, limit, setPage }) {
  const totalPages = Math.ceil(total / limit);
  // console.log(totalPages);

  const handlePagination = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className="mt-2">
      {totalPages > 0 &&
        [...Array(totalPages)].map((row, key) => {
          return (
            <button
              key={key}
              className={`${page === key + 1 ? "bg-primary" : ""}`}
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
