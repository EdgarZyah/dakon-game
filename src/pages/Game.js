import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import ModalGame from '../components/ModalGame';
import ButtonBack from '../components/buttonBack';
import '../App.css';
import './Game.css';
import ButtonInfo from '../components/ButtonInfo';
import Modal from '../components/Modal';

const Game = () => {
    const [pits, setPits] = useState([7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [isModalGameOpen, setIsModalGameOpen] = useState(false);
    const [winner, setWinner] = useState('');
    const [score, setScore] = useState(0);
    const [showRotateMessage, setShowRotateMessage] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);

    const checkOrientation = () => {
        if (window.innerHeight > window.innerWidth) {
            setShowRotateMessage(true);
        } else {
            setShowRotateMessage(false);
        }
    };
    const handleOpenModal = () => {
        setShowModalInfo(true);
    };

    const handleCloseModal = () => {
        setShowModalInfo(false);
    };

    useEffect(() => {
        checkOrientation();
        window.addEventListener('resize', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

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

            if (isGameFinished(newPits)) {
                const winner = determineWinner(newPits);
                const score = winner === "Player 1" ? newPits[6] : newPits[13];
                setWinner(winner);
                setScore(score);
                setIsModalGameOpen(true);
            }
        }
    };

    const isGameFinished = (pits) => {
        return pits.slice(0, 6).every((stones) => stones === 0) || pits.slice(7, 13).every((stones) => stones === 0);
    };

    const determineWinner = (pits) => {
        const player1Score = pits[6];
        const player2Score = pits[13];
        if (player1Score > player2Score) {
            return "Player 1";
        } else if (player2Score > player1Score) {
            return "Player 2";
        } else {
            return "It's a tie!";
        }
    };

    const handleReset = () => {
        setPits([7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 0]);
        setCurrentPlayer(0);
        setIsModalGameOpen(false);
        setWinner('');
        setScore(0);
    };

    const handleCloseModalGame = () => {
        setIsModalGameOpen(false);
    };

    return (
        <div className='gamescreen'>
            {showRotateMessage && (
                <div id="rotate-message">
                    Silakan miringkan perangkat Anda untuk pengalaman yang lebih baik
                </div>
            )}
            <div className="top-bar">
                <ButtonBack />
                <ButtonInfo text={'i'} onClick={handleOpenModal} />
            </div>
            <div className="game">
                <div className="current-player">
                    <p>{currentPlayer === 0 ? "Player One Turn" : "Player Two Turn"}</p>
                </div>
                <Board pits={pits} onPitClick={handlePitClick} />
                <ModalGame show={isModalGameOpen} winner={winner} score={score} onReset={handleReset} onClose={handleCloseModalGame} />
            </div>
            <Modal show={showModalInfo} handleClose={handleCloseModal}>
                <h2>Aturan Permainan</h2>
                <p>1. skskskskksksksksk</p>
                <p>2. skskskskksksksksk</p>
                <p>3. skskskskksksksksk</p>
                <p>4. skskskskksksksksk</p>
                <p>5. skskskskksksksksk</p>
            </Modal>
        </div>
    );
};

export default Game;
