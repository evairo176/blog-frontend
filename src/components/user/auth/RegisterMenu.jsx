import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/slices/users/usersSlices";

function RegisterMenu() {
  const formSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values));
      // console.log(values);
    },
    validationSchema: formSchema,
  });
  //   console.log(formik);

  // select state from store with useSelector
  const storeData = useSelector((store) => store.users);
  const { loading, appErr, serverErr, registered } = storeData;
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
                    formik.errors.firstName && "is-invalid"
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
                  className={`form-control form-layanan ${
                    formik.errors.lastName && "is-invalid"
                  }`}
                />
                {formik.touched.lastName && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
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
                {loading ? (
                  <button disabled className="btn btn-primary">
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default RegisterMenu;
