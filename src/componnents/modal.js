import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" >
            <div className="modal-content" style={{border: '30px solid #298FCFB2', }}>
                <button onClick={onClose} className="close-btn">X</button>
                {children}
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    max-width: 700px;
                    width: 100%;
                }
                .close-btn {
                    background: transparent;
                    border: none;
                    font-size: 18px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Modal;
