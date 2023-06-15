import React from "react";

const Button = (props) => {
  const className = "btn btn-outline mx-1rem " + props.className;
  const name = props.buttonname;
  return (
    <div>
      <button className={className} {...props}>
        {name}
      </button>
    </div>
  );
};

export default Button;
