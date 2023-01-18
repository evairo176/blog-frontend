import { useFormik } from "formik";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { detailCategoryByIdAction } from "../../redux/slices/category/categorySlices";
import LoadingComponent from "../../utils/LoadingComponent";
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
});
function UpdateCategoryMenu() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailCategoryByIdAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const storeData = useSelector((store) => store?.category);
  const { loading, detailCategory } = storeData;
  //   console.log(detailCategory);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: detailCategory?.title,
    },
    onSubmit: (values) => {
      //   console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <Fragment>
      <Fragment>
        <div className="center">
          <div className="card ">
            <div className="card-header">Update Category</div>
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
    </Fragment>
  );
}

export default UpdateCategoryMenu;
