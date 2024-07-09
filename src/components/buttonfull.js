import React from 'react';
import { Link } from 'react-router-dom';


const ButtonFull = ({ text, onClick}) => {
  return (
    <Link  className="fullscreen-btn" onClick={onClick}>
      {text}
    </Link>
  );
};

export default ButtonFull;
