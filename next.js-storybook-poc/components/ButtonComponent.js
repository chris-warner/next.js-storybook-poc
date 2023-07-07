import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ transition: 'background-color 0.3s', cursor: 'pointer' }}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
