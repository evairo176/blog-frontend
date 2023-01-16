import React from "react";
import Moment from "react-moment";

function DateFormatter(props) {
  return (
    <>
      <Moment format="D MMM YYYY" withTitle>
        {props.date}
      </Moment>
    </>
  );
}

export default DateFormatter;
