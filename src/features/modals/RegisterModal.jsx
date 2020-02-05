import React from 'react';
import { Modal } from 'semantic-ui-react';
import RegisterForm from '../auth/register/RegisterForm';

const RegisterModal = ({ opened = false, onClose }) => {
  return (
    <Modal size='tiny' closeIcon='close' open={opened} onClose={onClose} >
      <RegisterForm formStyle={{ padding: '60px 30px' }}/>
    </Modal>
  )
}

export default RegisterModal;