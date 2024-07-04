import React from 'react';
import { Link } from 'react-router-dom';


const ButtonPlay = ({ text, link }) => {
  return (
    <Link to={link} className="start-button">
      {text}
    </Link>
  );
};

export default ButtonPlay;
