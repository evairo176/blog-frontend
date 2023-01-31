import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createPostAction } from "../../redux/slices/posts/postSlices";
import CategoryDropdown from "../../utils/CategoryDropdown";
import LoadingComponent from "../../utils/LoadingComponent";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Navbar from "../cummon/Navbar";
import { fetchAllCategoryAction } from "../../redux/slices/category/categorySlices";

//
const StyleDropzone = styled.div`
  width: 100%;
  min-height: 80px;
  text-align: center;
  border: 1px solid #dfdada;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};
const pj = {
  margin: 0,
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.object().required("Category is required"),
  image: Yup.string().required("Image is required"),
});
function CreatePostMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      image: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      const data = {
        title: values?.title,
        category: values?.category?.label,
        description: values?.description,
        image: values?.image,
      };
      dispatch(createPostAction(data));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector((store) => store?.posts);
  const { loading, isCreated } = storeData;

  const storeCategory = useSelector((store) => store?.category);
  const { categoryList, loadingCategory } = storeCategory;
  if (isCreated) {
    navigate("/post-list");
  }
  //   console.log(formik.values.image);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      formik.setFieldValue("image", acceptedFiles[0]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    multiple: true,
    onBlur: () => {
      formik.handleBlur("image");
    },
  });

  const thumbs = files.map((file) => {
    return (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            alt=""
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
          <br />
        </div>
      </div>
    );
  });
  // formik

  useEffect(() => {
    dispatch(fetchAllCategoryAction());
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Navbar />
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
                  id="category"
                  data={categoryList}
                  loading={loadingCategory}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  value={formik.values.description}
                  onChange={formik.handleChange("description")}
                  onBlur={formik.handleBlur("description")}
                  placeholder="Description"
                  type="text"
                  className={`form-control form-layanan ${
                    formik.errors.description && "is-invalid"
                  }`}
                ></textarea>
                {formik.touched.description && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {formik.errors.description}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Image</label>
                <div className="abc">
                  <StyleDropzone
                    style={formik.errors.image && { border: "1px solid red" }}
                    {...getRootProps({ className: "dropzone" })}
                  >
                    <input {...getInputProps()} />

                    <p style={pj}>
                      Drag & drop some files here, or click to select files
                    </p>
                  </StyleDropzone>
                  {formik.touched.image && (
                    <div
                      id="validationServer03Feedback"
                      className="text-danger"
                    >
                      {formik.errors.image}
                    </div>
                  )}

                  <aside style={thumbsContainer}>{thumbs}</aside>
                </div>

                {/* <Dropzone
                  multiple={false}
                  onDrop={(acceptedFiles) => {
                    formik.setFieldValue("image", acceptedFiles[0]);
                  }}
                  accept="image/jpeg,image/png"
                  onBlur={formik.handleBlur("image")}
                >
                  {({ getRootProps, getInputProps }) => {
                    return (
                      <div>
                        <div
                          {...getRootProps({
                            className: "dropzone",
                            onDrop: (event) => {
                              event.stopPropagation();
                            },
                          })}
                        >
                          <input
                            {...getInputProps()}
                            className={`form-control form-layanan ${
                              formik.errors.image && "is-invalid"
                            }`}
                          />
                          <p className="text-secondary">
                            {" "}
                            Click here to select image
                          </p>
                          {formik.touched.image && (
                            <div
                              id="validationServer03Feedback"
                              className="invalid-feedback"
                            >
                              {formik.errors.image}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }}
                </Dropzone> */}
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
