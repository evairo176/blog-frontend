import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function RegisterMenu() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   console.log(formik);
  return (
    <Fragment>
      <div className="center">
        <div className="card ">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} action="">
              <div className="form-group mb-3">
                <label htmlFor="firstName">Nama Depan</label>
                <input
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  type="text"
                  className={`form-control form-layanan ${
                    formik.touched.firstName ? "is-invalid" : ""
                  }`}
                />
                {formik.touched.firstName && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Nama Belakang</label>
                <input
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterMenu;
