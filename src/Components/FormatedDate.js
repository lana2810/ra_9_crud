import React from "react";

function FormatedDate({ value }) {
  const displayDate = new Date(value).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <time dateTime={value} className="absolute bottom-0 right-1">
      {displayDate}
    </time>
  );
}

export default FormatedDate;
