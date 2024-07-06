import React from 'react';
import gamecompletimage from './image/gamecomplete.png';

const ModalGame = ({ show, winner, score, onReset, onClose }) => {
    if (!show) return null; // jika mau ngedit modal tanda seru di hapus dulu, maka otomatis modal akan muncul, jangan lupa dikembalikan 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-modal-game" onClick={onClose}>X</button>
                <img src={gamecompletimage} alt="Game Complete" className="game-complete-image" />
                <div className="modal-body">
                    <h3 className="winner-title">Winner</h3>
                    <p className="winner-name">{winner}</p>
                    <h3 className="score-title">Score</h3>
                    <p className="score">{score}</p>
                </div>
                <div className="modal-footer">
                    <button className="new-game-button" onClick={onReset}>New Game</button>
                </div>
            </div>
        </div>
    );
};

export default ModalGame;
