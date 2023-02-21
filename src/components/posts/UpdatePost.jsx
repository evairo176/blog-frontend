import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostByIdUpdate } from "../../redux/slices/posts/postSlices";
import Navbar from "../cummon/Navbar";
import * as Yup from "yup";
import Quill from "../../utils/Quill";
import CategoryDropdown from "../../utils/CategoryDropdown";
import { fetchAllCategoryAction } from "../../redux/slices/category/categorySlices";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import LoadingComponent from "../../utils/LoadingComponent";

const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.object().required("Category is required"),
  image: Yup.string().required("Image is required"),
});

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
function UpdatePost() {
  const dispatch = useDispatch();
  const params = useParams();
  const storeData = useSelector((store) => store?.posts);
  const { postDetailUpdate, loading } = storeData;
  const navigate = useNavigate();

  const storeCategory = useSelector((store) => store?.category);
  const { categoryList, loadingCategory } = storeCategory;

  useEffect(() => {
    dispatch(fetchAllCategoryAction());
    dispatch(fetchPostByIdUpdate(params?.id));
  }, [dispatch, params]);

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
    multiple: false,
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
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: postDetailUpdate?.title,
      description: postDetailUpdate?.description,
      category: {
        label: postDetailUpdate?.category,
      },
      image: "",
    },
    onSubmit: (values) => {
      const data = {
        title: values?.title,
        category: values?.category?.label
          ? values?.category?.label
          : postDetailUpdate?.category,
        description: values?.description,
        image: values?.image,
      };
      console.log(data);
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Navbar />
      <div className="container-content-blog">
        <div className="card-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input
                value={formik.values.title}
                onChange={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                placeholder="Post"
                type="text"
                className={`form-custom ${formik.errors.title && "is-invalid"}`}
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
                defaultValue={postDetailUpdate?.category}
                error={formik.errors.category}
                touched={formik.touched.category}
                id="category"
                data={categoryList}
                loading={loadingCategory}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <Quill
                onChange={formik.setFieldValue}
                onBlur={formik.setFieldTouched}
                value={formik.values.description}
                error={formik.errors.category}
                touched={formik.touched.category}
                id="description"
              />
              {/* <textarea
                
                
                
                placeholder="Description"
                type="text"
                className={`form-custom ${
                  formik.errors.description && "is-invalid"
                }`}
              ></textarea> */}
              {formik.touched.description && (
                <div className="text-danger">{formik.errors.description}</div>
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
                  <div id="validationServer03Feedback" className="text-danger">
                    {formik.errors.image}
                  </div>
                )}

                <aside style={thumbsContainer}>{thumbs}</aside>
              </div>
            </div>
            <div className="form-group mt-3">
              {loading ? (
                <button disabled className="btn-edit">
                  <LoadingComponent />
                </button>
              ) : (
                <div className="btn-group">
                  <button type="submit" className="btn-edit">
                    Save
                  </button>
                  <button
                    onClick={() => navigate("/posts")}
                    type="button"
                    className="btn-edit back"
                  >
                    Back to Post
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePost;
