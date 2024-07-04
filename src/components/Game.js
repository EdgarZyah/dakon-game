import React, { useState } from 'react';
import Board from './Board';
import '../App.css';

const Game = () => {
    const [pits, setPits] = useState([7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);

    const handlePitClick = (clickedIndex) => {
        let newPits = [...pits];
        const playerSide = currentPlayer === 0 ? [0, 1, 2, 3, 4, 5] : [7, 8, 9, 10, 11, 12];

        if (playerSide.includes(clickedIndex)) {
            let stones = newPits[clickedIndex];
            newPits[clickedIndex] = 0;

            let currentIndex = clickedIndex;
            while (stones > 0) {
                currentIndex = (currentIndex + 1) % 14;
                if ((currentPlayer === 0 && currentIndex === 13) || (currentPlayer === 1 && currentIndex === 6)) {
                    continue;
                }
                newPits[currentIndex]++;
                stones--;
            }

            if ((currentPlayer === 0 && currentIndex === 6) || (currentPlayer === 1 && currentIndex === 13)) {
                setPits(newPits);
                return;
            }

            if (newPits[currentIndex] === 1 && playerSide.includes(currentIndex)) {
                const oppositeIndex = 12 - currentIndex;
                const oppositeStones = newPits[oppositeIndex];
                newPits[oppositeIndex] = 0;
                newPits[currentIndex] = 0;
                newPits[currentPlayer === 0 ? 6 : 13] += oppositeStones + 1;
            }

            setPits(newPits);
            setCurrentPlayer((prevPlayer) => 1 - prevPlayer);
        }
    };

    const isGameFinished = () => {
        return pits.slice(0, 6).every((stones) => stones === 0) || pits.slice(7, 13).every((stones) => stones === 0);
    };

    const determineWinner = () => {
        const player1Score = pits[6];
        const player2Score = pits[13];
        if (player1Score > player2Score) {
            return "Player 1 wins!";
        } else if (player2Score > player1Score) {
            return "Player 2 wins!";
        } else {
            return "It's a tie!";
        }
    };

    return (
        <div className="game">
            <h1>Dakon Game</h1>
            <Board pits={pits} onPitClick={handlePitClick} />
            {isGameFinished() && (
                <div className="result">
                    <h2>Game Over!</h2>
                    <p>{determineWinner()}</p>
                </div>
            )}
            <div className="current-player">
                <p>Current Player: {currentPlayer === 0 ? "Player 1" : "Player 2"}</p>
            </div>
        </div>
    );
};

export default Game;
