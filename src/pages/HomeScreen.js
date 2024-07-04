import React, { useState } from 'react';
import ButtonPlay from '../components/ButtonPlay';
import ButtonInfo from '../components/ButtonInfo';
import Modal from '../components/Modal';
import './HomeScreen.css';

const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="home-screen">
            <div className='setting'>
                <ButtonInfo text="i" onClick={handleOpenModal} />
            </div>
            <div className='container'>
                <img src='./image/judul.png' alt='judul' className='judulgame' />
                <ButtonPlay text="Mainkan" link="/game" />
            </div>
            <Modal show={showModal} handleClose={handleCloseModal}>
                <h2>Aturan Permainan</h2>
                <p>1. skskskskksksksksk</p>
                <p>2. skskskskksksksksk</p>
                <p>3. skskskskksksksksk</p>
                <p>4. skskskskksksksksk</p>
                <p>5. skskskskksksksksk</p>
            </Modal>
        </div>
    )
}

export default HomeScreen;
