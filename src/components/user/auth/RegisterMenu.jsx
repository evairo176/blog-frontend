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
  return (
    <Fragment>
      <div className="center">
        <div className="card ">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-3">
                <label htmlFor="firstName">Nama Depan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Nama Belakang</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterMenu;
