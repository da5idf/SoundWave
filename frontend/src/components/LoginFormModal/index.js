import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'

function LoginFormModal({ loginModalProp }) {

    const { showLoginModal, setShowLoginModal } = loginModalProp;

    return (
        <>
            <button onClick={() => setShowLoginModal(true)} className="button" id="signin-button">Sign In</button>
            {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;