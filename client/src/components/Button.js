import React from 'react';

// mmodule for dynamic button creation
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props['className']}
      id={props['id']}
      value={props['value']}
      data = {props['data']}
      type={props['type']}
    >
      {props.children}
    </button>
  );
};

export default Button;
