import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className}`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="bosy-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
