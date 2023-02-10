import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Quill({ onChange, onBlur, value, error, id }) {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    e = e !== "<p><br></p>" ? e : "";
    onChange(id, e);
  };

  // handle blur
  const handleBlur = () => {
    onBlur(id, true);
  };
  return (
    <ReactQuill
      rules={{
        required: "Please enter task description",
      }}
      modules={modules}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      theme="snow"
      placeholder="Content goes here..."
    />
  );
}

export default Quill;
