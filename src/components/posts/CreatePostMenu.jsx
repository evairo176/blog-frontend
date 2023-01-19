import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createPostAction } from "../../redux/slices/posts/postSlices";
import CategoryDropdown from "../../utils/CategoryDropdown";
import LoadingComponent from "../../utils/LoadingComponent";

const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.object().required("Category is required"),
});
function CreatePostMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      const data = {
        title: values?.title,
        category: values?.category?.label,
        description: values?.description,
      };
      //   console.log(data);
      dispatch(createPostAction(data));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector((store) => store?.post);
  const { loading, isCreated } = storeData;
  if (isCreated) {
    navigate("/post-list");
  }
  return (
    <Fragment>
      <div className="center">
        <div className="card ">
          <div className="card-header">Create Post</div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} action="">
              <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  placeholder="Post"
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
              <div className="form-group mb-3">
                <label htmlFor="category">Category</label>
                <CategoryDropdown
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  value={formik.values.category?.label}
                  error={formik.errors.category}
                  touched={formik.touched.category}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <input
                  value={formik.values.description}
                  onChange={formik.handleChange("description")}
                  onBlur={formik.handleBlur("description")}
                  placeholder="Description"
                  type="text"
                  className={`form-control form-layanan ${
                    formik.errors.description && "is-invalid"
                  }`}
                />
                {formik.touched.description && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.description}
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

export default CreatePostMenu;
