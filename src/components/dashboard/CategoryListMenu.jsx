import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategoryAction } from "../../redux/slices/category/categorySlices";

function CategoryListMenu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategoryAction());
  }, [dispatch]);

  const storeData = useSelector((store) => store?.category);
  const { categoryList, appErr, serverErr, loading } = storeData;
  console.log(storeData);

  return (
    <Fragment>
      <div className="center">
        <div className="card ">
          <div className="card-header">Category List</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Created At</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="text-center" colSpan="4">
                      Loading...
                    </td>
                  </tr>
                ) : appErr || serverErr ? (
                  <tr>
                    <td className="text-center" colSpan="4">
                      Data Not Found
                    </td>
                  </tr>
                ) : (
                  categoryList?.map((row, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          {row.user.firstName} {row.user.lastName}
                        </td>
                        <td>{row.title}</td>
                        <td>{row.createdAt}</td>
                        <td>{row.title}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryListMenu;
