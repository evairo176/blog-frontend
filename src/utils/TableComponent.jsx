import React from "react";
import LoadingComponent from "./LoadingComponent";

function TableComponent({ data, loading, page, limit, total }) {
  // if (page === 1) {
  //   page = 2;
  // } else {
  //   page = page;
  // }
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            data?.map((row, key) => {
              return (
                <tr key={key}>
                  <td>{(page - 1) * limit + (key + 1)}</td>
                  <td>{row.title}</td>
                  <td>{row.category}</td>
                  <td>{row.description}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>
                <LoadingComponent />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
