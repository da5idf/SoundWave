import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} class="button" id="signin-button">Sign In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;