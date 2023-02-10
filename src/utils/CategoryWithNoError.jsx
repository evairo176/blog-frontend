import React from "react";
import Select from "react-select";

function CategoryWithNoError(props) {
  const allCategory = props?.data?.map((row) => {
    return {
      value: row?.id,
      label: row?.title,
    };
  });

  // handle change
  const handleChange = (value) => {
    props.onChange(value?.value);
  };

  return (
    <div>
      {props?.loading ? (
        <div>Category is Loading...</div>
      ) : (
        <Select
          onChange={handleChange}
          id={props?.id}
          placeholder={props?.placeholder}
          options={allCategory}
          value={props?.value}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: "#cbcbcb",
              background: "var(--secunder)",
              color: "var(--font)",
              cursor: "pointer",
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
    </div>
  );
}

export default CategoryWithNoError;
