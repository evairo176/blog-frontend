import { Pagination } from "@mui/material";
import React from "react";

function PaginationCustom({ limit, total, setPage, loading }) {
  const totalPages = Math.ceil(total / limit);
  const classes = {
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
      },
    },
  };
  return (
    <div>
      <Pagination
        count={totalPages}
        onChange={(event, value) => setPage(value)}
        color="secondary"
        className="pagination-custom"
        shape="rounded"
        sx={{ button: { color: "#ffffff" } }}
      />
    </div>
  );
}

export default PaginationCustom;
