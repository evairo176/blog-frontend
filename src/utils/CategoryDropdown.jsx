import React from "react";
import Select from "react-select";

function CategoryDropdown(props) {
  const allCategory = props?.data?.map((row) => {
    return {
      value: row?._id,
      label: row?.title,
    };
  });

  // handle change
  const handleChange = (value) => {
    props.onChange(props?.category, value);
  };

  // handle blur
  const handleBlur = () => {
    props.onBlur(props?.category, true);
  };
  return (
    <div>
      {props?.loading ? (
        <div>Category is Loading...</div>
      ) : (
        <Select
          onChange={handleChange}
          onBlur={handleBlur}
          id={props?.category}
          options={allCategory}
          value={props?.value?.label}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: props?.error ? "red" : "#cbcbcb",
            }),
          }}
        />
      )}
      {props?.error && <div className="text-danger">{props?.error}</div>}
    </div>
  );
}

export default CategoryDropdown;
