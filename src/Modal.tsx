import React from "react";
import "./Modal.css";

interface ModalProps {
    isVisible: boolean;
    isWinner: boolean;
    onRestart: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, isWinner, onRestart }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <p>{isWinner ? "Winner!" : "Nice try!"}</p>
                <button className="modal-btn" onClick={onRestart}>Start New Game</button>
            </div>
        </div>
    );
};

export default Modal;
