import React, { useState, useEffect } from 'react';
import ButtonPlay from '../components/ButtonPlay';
import ButtonInfo from '../components/ButtonInfo';
import Modal from '../components/Modal';
import './HomeScreen.css';
import judul from '../components/image/judul.png'

const HomeScreen = () => {
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showRotateMessage, setShowRotateMessage] = useState(false);

    const handleOpenModal = () => {
        setShowModalInfo(true);
    };

    const handleCloseModal = () => {
        setShowModalInfo(false);
    };

    const checkOrientation = () => {
        if (window.innerHeight > window.innerWidth) {
            setShowRotateMessage(true);
        } else {
            setShowRotateMessage(false);
        }
    };

    useEffect(() => {
        checkOrientation();
        window.addEventListener('resize', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

    return (
        <>
            {showRotateMessage && (
                <div id="rotate-message">
                    Silakan miringkan perangkat Anda untuk pengalaman yang lebih baik
                </div>
            )}
            <div className="home-screen">
                <div className='top-bar'>
                    <ButtonInfo text="i" onClick={handleOpenModal} />
                </div>
                <div className='container'>
                    <img src={judul} alt='judul' className='judulgame' />
                    <ButtonPlay text="Mainkan" link="/game" />
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
        </>
    );
}

export default HomeScreen;
