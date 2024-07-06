

// import React from 'react';

// const Pit = ({ stones, onClick }) => {
//     return (
//         <div className="pit" onClick={onClick}>
//             {stones}
//         </div>
//     );
// };

// export default Pit;




import React from 'react';

const Pit = ({ stones, onClick }) => {
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="pit" onClick={onClick}>
            {Array.from({ length: stones }).map((_, index) => (
                <div
                    key={index}
                    className="marble"
                    style={{
                        backgroundImage: 'url(./image/purple-marble.png)',
                        backgroundColor: generateRandomColor()
                    }}
                />
            ))}
        </div>
    );
};

export default Pit;


