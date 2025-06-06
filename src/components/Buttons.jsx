import React from 'react';
import './buttons.css';

// This comp was created to be used, but was never implemented in the project.
// It is a simple button component with custom styles.

const Buttons = ({ children, ...props }) => {
  return (
    <button className="custom-btn" {...props}>
      {children}
    </button>
  );
};

export default Buttons;
