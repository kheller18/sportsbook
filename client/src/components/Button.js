import React from 'react';

const Button = (props) => {
  // console.log('rendering button ', {children})
  // console.log(props);
  return (
    <button
      onClick={props.onClick}
      className={props['className']}
      value={props['value']}
      data = {props['data']}
    >
      {props.children}
    </button>
  );
};

export default Button;
