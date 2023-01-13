import { useFormik } from "formik";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
function LoginMenu() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
    },
    validationSchema: formSchema,
  });
  return (
    <Fragment>
      <div className="center">
        <ToastContainer />
        <div className="card ">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} action="">
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  type="email"
                  className={`form-control form-layanan ${
                    formik.errors.email && "is-invalid"
                  }`}
                />
                {formik.touched.email && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  type="password"
                  className={`form-control form-layanan ${
                    formik.errors.password && "is-invalid"
                  }`}
                />
                {formik.touched.password && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                {/* {loading ? (
                  <button disabled className="btn btn-primary">
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default LoginMenu;
