import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUserAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../../utils/LoadingComponent";
import imgLogin from "../../assets/images/image-login.svg";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});
function LoginMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // select state with useSelector
  const storeData = useSelector((store) => store.users);
  const { userAuth, loading } = storeData;
  const auth = userAuth ? userAuth : "";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
      // console.log(values);
    },
    validationSchema: formSchema,
  });

  if (auth) {
    navigate("/profile");
  }
  return (
    <Fragment>
      <div className="bg-hasj">
        <div className="container-cssdw">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs mb-2">
              <div className="pdwd-title">
                Enter your login <br /> credentials to gain <br /> access to
                your account.
              </div>
              <div className="pdwd-image">
                <img src={imgLogin} className="img-login" alt="imagelogin" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs">
              <div className="pdwd-title-sign-in">Sign In</div>
              <div className="form-login-dwdj">
                <form onSubmit={formik.handleSubmit} action="">
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
                      <button className="btn btn-custom">Login Now</button>
                    )}
                  </div>
                  <Link to="/register" className="jjdwd">
                    Don’t have an account ? Please Register Here
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

export default LoginMenu;
