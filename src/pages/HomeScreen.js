import React, { useState, useEffect } from 'react';
import ButtonPlay from '../components/ButtonPlay';
import ButtonInfo from '../components/ButtonInfo';
import Modal from '../components/Modal';
import './HomeScreen.css';
import judul from '../components/image/judul.png';
import ButtonFull from '../components/buttonfull';

const HomeScreen = () => {
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showRotateMessage, setShowRotateMessage] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

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

    const handleFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    };

    const handleExitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    };

    const checkFullscreen = () => {
        if (
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
        ) {
            setIsFullscreen(true);
            localStorage.setItem('isFullscreen', 'true');
        } else {
            setIsFullscreen(false);
            localStorage.setItem('isFullscreen', 'false');
        }
    };

    useEffect(() => {
        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        document.addEventListener('fullscreenchange', checkFullscreen);
        document.addEventListener('webkitfullscreenchange', checkFullscreen);
        document.addEventListener('mozfullscreenchange', checkFullscreen);
        document.addEventListener('MSFullscreenChange', checkFullscreen);

        // Check fullscreen status from localStorage on mount
        const fullscreenStatus = localStorage.getItem('isFullscreen');
        if (fullscreenStatus === 'true') {
            setIsFullscreen(true);
        }

        return () => {
            window.removeEventListener('resize', checkOrientation);
            document.removeEventListener('fullscreenchange', checkFullscreen);
            document.removeEventListener('webkitfullscreenchange', checkFullscreen);
            document.removeEventListener('mozfullscreenchange', checkFullscreen);
            document.removeEventListener('MSFullscreenChange', checkFullscreen);
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
                    {!isFullscreen && (
                        <ButtonFull className="fullscreen-btn" onClick={handleFullscreen} text='Go Fullscreen'/>
                    )}
                    {isFullscreen && (
                        <ButtonFull className="fullscreen-btn" onClick={handleExitFullscreen} text='Exit Fullscreen'/>
                    )}
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
