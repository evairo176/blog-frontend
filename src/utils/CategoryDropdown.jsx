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
    props.onChange(props?.id, value);
  };

  // handle blur
  const handleBlur = () => {
    props.onBlur(props?.id, true);
  };
  return (
    <div>
      {props?.loading ? (
        <div>Category is Loading...</div>
      ) : (
        <Select
          classNamePrefix="filter"
          onChange={handleChange}
          onBlur={handleBlur}
          id={props?.id}
          options={allCategory}
          value={
            allCategory &&
            allCategory.filter((option) => option.label === props.defaultValue)
          }
          // value={props?.value?.label}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "var(--secunder)",
              borderColor: props?.error ? "red" : "#cbcbcb",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: "blue",
              primary25: "pink",
              primary: "black",
              neutral80: "var(--font)",
            },
          })}
        />
      )}
      {props?.error && <div className="text-danger">{props?.error}</div>}
    </div>
  );
}

export default CategoryDropdown;
