import React from "react";

import BarLoader from "react-spinners/BarLoader";

function LoadingComponent() {
  return (
    <>
      <div>
        <BarLoader size={15} color="white" loading={true} />
      </div>
    </>
  );
}

export default LoadingComponent;
