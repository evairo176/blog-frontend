import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createCategoryAction } from "../../redux/slices/category/categorySlices";
import LoadingComponent from "../../utils/LoadingComponent";
import Navbar from "../cummon/Navbar";
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
});

function CreateCategoryMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      dispatch(createCategoryAction(values));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector((store) => store?.category);
  const { loading, isCreated } = storeData;

  if (isCreated) {
    navigate("/category-list");
  }
  // console.log(storeData);
  // abc
  return (
    <Fragment>
      <Navbar />
      <div className="container-content-blog">dwad</div>
      <div className="center">
        <div className="card ">
          <div className="card-header">Add New Category</div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} action="">
              <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  placeholder="New Category"
                  type="text"
                  className={`form-control form-layanan ${
                    formik.errors.title && "is-invalid"
                  }`}
                />
                {formik.touched.title && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.title}
                  </div>
                )}
              </div>
              <div className="form-group mt-3">
                {loading ? (
                  <button disabled className="btn btn-primary">
                    <LoadingComponent />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateCategoryMenu;
