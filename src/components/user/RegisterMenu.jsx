import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../../utils/LoadingComponent";
import imgRegister from "../../assets/images/image-register.svg";
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});

function RegisterMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  // select state from store with useSelector
  const storeData = useSelector((store) => store.users);
  const { loading, isRegistered } = storeData;

  if (isRegistered) {
    navigate("/login");
  }

  return (
    <Fragment>
      <div className="bg-hasj">
        <div className="container-cssdw">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs mb-2">
              <div className="pdwd-title">
                Create an account to save <br /> your progress and access <br />{" "}
                exclusive content.
              </div>
              <div className="pdwd-image">
                <img src={imgRegister} className="img-login" alt="imagelogin" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs">
              <div className="pdwd-title-sign-in">Register</div>
              <div className="form-login-dwdj">
                <form onSubmit={formik.handleSubmit} action="">
                  <div className="form-group mb-2">
                    <label htmlFor="firstName" className="label-costum">
                      First Name
                    </label>
                    <input
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleBlur("firstName")}
                      type="text"
                      className={`form-control form-custom`}
                    />
                    {formik.touched.firstName && (
                      <div className="error-custom">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="lastName" className="label-costum">
                      Last Name
                    </label>
                    <input
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                      type="text"
                      className={`form-control form-custom`}
                    />
                    {formik.touched.lastName && (
                      <div className="error-custom">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email" className="label-costum">
                      Email
                    </label>
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      type="text"
                      className={`form-control form-custom`}
                    />
                    {formik.touched.email && (
                      <div className="error-custom">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password" className="label-costum">
                      Password
                    </label>
                    <input
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      type="password"
                      className={`form-control form-custom`}
                    />
                    {formik.touched.password && (
                      <div className="error-custom">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    {loading ? (
                      <button className="btn btn-custom">
                        <LoadingComponent />
                      </button>
                    ) : (
                      <button className="btn btn-custom">Register Now</button>
                    )}
                  </div>
                  <Link to="/login" className="jjdwd">
                    Already have an account ? Please Login Here
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterMenu;
