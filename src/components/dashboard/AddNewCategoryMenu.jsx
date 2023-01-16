import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createCategoryAction } from "../../redux/slices/category/categorySlices";
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
});

function AddNewCategoryMenu() {
  const dispatch = useDispatch();
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
  const { loading } = storeData;

  // console.log(storeData);
  // abc
  return (
    <Fragment>
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
                    Loading...
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

export default AddNewCategoryMenu;
