import React from 'react';


const ButtonInfo = ({ text, onClick }) => {
    return (
        <button className="info-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonInfo;
