import React from 'react';
import './Pit.css';
import marble1 from './image/red-marble.png';
import marble2 from './image/blue-marble.png';
import marble3 from './image/green-marble.png';
import marble4 from './image/purple-marble.png';
import marble5 from './image/yellow-marble.png';

const images = [marble1, marble2, marble3, marble4, marble5];

const Pit = ({ stones, onClick }) => {
    const getRandomImage = () => {
        return images[Math.floor(Math.random() * images.length)];
    };

    const getRandomPosition = () => {
        const maxPosition = 170;  // 200 (pit size) - 30 (marble size) = 170
        const top = Math.floor(Math.random() * maxPosition);
        const left = Math.floor(Math.random() * maxPosition);
        return { top, left };
    };

    return (
        <div className="pit" onClick={onClick}>
            {Array.from({ length: stones }).map((_, index) => {
                const { top, left } = getRandomPosition();
                return (
                    <div
                        key={index}
                        className="marble"
                        style={{
                            backgroundImage: `url(${getRandomImage()})`,
                            top: `${top}px`,
                            left: `${left}px`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Pit;
