import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCategoryAction } from "../../redux/slices/category/categorySlices";
import LoadingComponent from "../../utils/LoadingComponent";
import Navbar from "../cummon/Navbar";
function CategoryListMenu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategoryAction());
  }, [dispatch]);

  const storeData = useSelector((store) => store?.category);
  const { categoryList, appErr, serverErr, loading } = storeData;
  // console.log(storeData);

  return (
    <Fragment>
      <Navbar />
      <div className="container-blog">
        <div className="center">
          <div className="card ">
            <div className="card-header">Category List</div>
            <div className="card-body">
              <div className="table-responsive">
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
                          <LoadingComponent />
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
                              <div className="d-flex align-items-center">
                                <div className="img-profile">
                                  <img
                                    src={`${row.user.profilePhoto}`}
                                    className="rounded-circle"
                                    alt=""
                                    width="40px"
                                  />
                                </div>
                                <div className="profile-name">
                                  {row.user.firstName} {row.user.lastName}
                                  <br />
                                  {row.user.email}
                                </div>
                              </div>
                            </td>
                            <td>{row.title}</td>
                            <td>{row.createdAt}</td>
                            <td>
                              <Link
                                to={`/update-category/${row._id}`}
                                className="btn btn-warning"
                              >
                                Edit
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryListMenu;
