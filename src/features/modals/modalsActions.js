import { MODAL_OPEN, MODAL_CLOSE } from "./modalsActionsTypes"

export const openModal = (modalType, modalProps) => ({
  type: MODAL_OPEN,
  payload: { modalType, modalProps }
});

export const closeModal = (modalType, modalProps) => ({
  type: MODAL_CLOSE,
  payload: { modalType, modalProps }
});