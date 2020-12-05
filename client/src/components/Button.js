import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props['className']}
      id={props['id']}
      value={props['value']}
      data = {props['data']}
    >
      {props.children}
    </button>
  );
};

export default Button;