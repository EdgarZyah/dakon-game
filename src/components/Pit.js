import React, { useState, useEffect } from 'react';
import marble1 from './image/red-marble.png';
import marble2 from './image/blue-marble.png';
import marble3 from './image/green-marble.png';
import marble4 from './image/purple-marble.png';
import marble5 from './image/yellow-marble.png';

const images = [marble1, marble2, marble3, marble4, marble5];

const Pit = ({ stones, onClick }) => {
    const [currentStones, setCurrentStones] = useState(stones);
    const [addingStones, setAddingStones] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (stones > currentStones) {
            setAddingStones(true);
            setIsAnimating(true);
            const interval = setInterval(() => {
                setCurrentStones(prev => {
                    if (prev < stones) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        setAddingStones(false);
                        setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after 1 second
                        return prev;
                    }
                });
            }, 300); // Adjust the interval duration as needed
        } else {
            setCurrentStones(stones);
        }
    }, [stones]);

    const getRandomImage = () => {
        return images[Math.floor(Math.random() * images.length)];
    };

    const getRandomPosition = () => {
        const minPosition = 5; 
        const maxPosition = 45; 
        const top = Math.random() * (maxPosition - minPosition) + minPosition;
        const left = Math.random() * (maxPosition - minPosition) + minPosition;
        return { top, left };
    };

    return (
        <div className={`pit ${addingStones ? 'animating' : ''}`} onClick={onClick}>
            <span className={`stone-count ${isAnimating ? 'animating' : ''}`}>{currentStones}</span>
            {Array.from({ length: currentStones }).map((_, index) => {
                const { top, left } = getRandomPosition();
                return (
                    <div
                        key={index}
                        className="marble"
                        style={{
                            backgroundImage: `url(${getRandomImage()})`,
                            top: `${top}%`,
                            left: `${left}%`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Pit;
