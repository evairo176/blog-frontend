import { Pagination } from "@mui/material";
import React from "react";

function PaginationCustom({ limit, total, setPage, loading }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <Pagination
        count={totalPages ? totalPages : 0}
        onChange={(event, value) => setPage(value)}
        color="secondary"
        className="pagination-custom"
        shape="rounded"
        sx={{ button: { color: "var(--font)" } }}
        size="small"
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default PaginationCustom;
