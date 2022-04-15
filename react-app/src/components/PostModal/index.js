import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostModal from './PostModal';
// import LoginForm from './LoginForm';

function LoginFormModal({ post }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='navbar-button'id='log-in-button'>Log In</button>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          >
          <PostModal post={post} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
