import { useFormik } from "formik";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
const formSchema = Yup.object({
  category: Yup.string().required("Category is required"),
});

function AddNewCategoryMenu() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });
  return (
    <Fragment>
      <div className="center">
        <ToastContainer />
        <div className="card ">
          <div className="card-header">Add New Category</div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} action="">
              <div className="form-group mb-3">
                <label htmlFor="category">Category</label>
                <input
                  value={formik.values.category}
                  onChange={formik.handleChange("category")}
                  onBlur={formik.handleBlur("category")}
                  placeholder="New Category"
                  type="email"
                  className={`form-control form-layanan ${
                    formik.errors.category && "is-invalid"
                  }`}
                />
                {formik.touched.category && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.category}
                  </div>
                )}
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                {/* {loading ? (
                  <button disabled className="btn btn-primary">
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddNewCategoryMenu;
