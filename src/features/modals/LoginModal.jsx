import React from 'react';
import { Modal } from 'semantic-ui-react';
import LoginForm from '../auth/login/LoginForm';

const LoginModal = ({ opened = false, onClose }) => {
  return (
    <Modal closeIcon='close' open={opened} onClose={onClose}>
      <LoginForm formStyle={{ padding: '60px 30px' }}/>
    </Modal>
  )
}

export default LoginModal;