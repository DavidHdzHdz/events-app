import { createReducer } from '../../app/common/util/reducerUtils';
import { MODAL_OPEN, MODAL_CLOSE } from './modalsActionsTypes';

const initialState = {
  opened: false,
  modalType: 'TestModal',
  modalProps: {}
};

const openModal = (state, { modalType, modalProps }) => ({ ...state, modalType, modalProps, opened: true });

const closeModal = (state, { modalType, modalProps }) => ({ ...state, modalType, modalProps, opened: false });

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});

