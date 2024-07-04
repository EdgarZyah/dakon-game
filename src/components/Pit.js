import React from 'react';

const Pit = ({ stones, onClick }) => {
    return (
        <div className="pit" onClick={onClick}>
            {stones}
        </div>
    );
};

export default Pit;
