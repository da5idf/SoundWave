import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TrackForm from './TrackForm';

function TrackFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="button" id="signin-button">Upload new wave</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TrackForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default TrackFormModal;