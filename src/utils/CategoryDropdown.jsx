import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchAllCategoryAction } from "../redux/slices/category/categorySlices";

function CategoryDropdown(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategoryAction());
  }, [dispatch]);

  const storeData = useSelector((store) => store?.category);
  const { categoryList, loading } = storeData;
  const allCategory = categoryList?.map((row) => {
    return {
      value: row?._id,
      label: row?.title,
    };
  });

  // handle change
  const handleChange = (value) => {
    props.onChange("category", value);
  };

  // handle blur
  const handleBlur = () => {
    props.onBlur("category", true);
  };
  return (
    <div>
      {loading ? (
        <div>Category is Loading...</div>
      ) : (
        <Select
          onChange={handleChange}
          onBlur={handleBlur}
          id="category"
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
