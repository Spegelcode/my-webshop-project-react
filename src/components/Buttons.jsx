import React from 'react';
import './buttons.css';

const Buttons = ({ children, ...props }) => {
  return (
    <button className="custom-btn" {...props}>
      {children}
    </button>
  );
};

export default Buttons;
