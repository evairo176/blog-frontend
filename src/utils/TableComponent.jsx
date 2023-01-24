import React from "react";

function TableComponent({ data }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, key) => {
            return (
              <tr key={key}>
                <td>{row.title}</td>
                <td>{row.category}</td>
                <td>{row.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
