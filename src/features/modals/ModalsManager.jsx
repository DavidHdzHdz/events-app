import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './modalsActions';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';


const ModalsManager = ({ modals: { modalType, modalProps, opened }, closeModal }) => {
  const modals = { TestModal, LoginModal, RegisterModal  }
  const CurrentModal = modals[modalType];
  return CurrentModal ? <CurrentModal opened={opened} {...modalProps} onClose={() => closeModal(modalType, {})} /> : null
}

const mapStateToProps = state => ({ modals: state.modals });

const mapActionsToProps = { closeModal }

export default connect(mapStateToProps, mapActionsToProps)(ModalsManager);


