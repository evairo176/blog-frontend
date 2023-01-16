import React, { CSSProperties } from "react";

import BarLoader from "react-spinners/BarLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoadingComponent() {
  return (
    <>
      <BarLoader
        size={15}
        color="black"
        loading={true}
        cssOverride={override}
      />
    </>
  );
}

export default LoadingComponent;
