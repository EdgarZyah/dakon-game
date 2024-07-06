import { useNavigate } from 'react-router-dom';
import React from 'react';
import arrowback from '../components/image/Vector.png'

const ButtonBack = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <button className="back-button" onClick={handleBackClick}>
            <img src={arrowback} alt="Back" className="arrow-icon" />
        </button>
    );
};

export default ButtonBack;
