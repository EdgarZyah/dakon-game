import React from 'react';
import Pit from './Pit';

const Board = ({ pits, onPitClick }) => {
    const rows = [[12, 11, 10, 9, 8, 7], [0, 1, 2, 3, 4, 5]];

    return (
        <div className="board-container">
            <div className="board">
                <div className='pit-besar'>
                    <Pit stones={pits[13]} onClick={() => onPitClick(13)} />
                </div>
                <div className="board-tengah">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((pitIndex) => (
                                <Pit key={pitIndex} stones={pits[pitIndex]} onClick={() => onPitClick(pitIndex)} />
                            ))}
                        </div>
                    ))}
                </div>
                <div className='pit-besar'>
                    <Pit stones={pits[6]} onClick={() => onPitClick(6)} />
                </div>
            </div>
        </div>
    );
};

export default Board;
