import React from 'react';


const ModalGame = ({ show, winner, score, onReset, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay-game">
            <div className="modal-content-game">
                <button className="close-modal-game" onClick={onClose}>X</button>
                <div className="modal-body-game">
                    <h3 className="winner-title-game">Winner</h3>
                    <p className="winner-name-game">{winner}</p>
                    <h3 className="score-title-game">Question's Score</h3>
                    <p className="score-game">{score}</p>
                </div>
                <div className="modal-footer-game">
                    <button className="new-game-button" onClick={onReset}>Play Again</button>
                </div>
            </div>
        </div>
    );
};

export default ModalGame;
