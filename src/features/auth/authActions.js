import { AUTH_SIGN_UP, AUTH_LOGIN, AUTH_LOGOUT } from "./authActionsTypes";
import { closeModal } from "../modals/modalsActions";

/**
 * AUTH LOGIN ACTION
 */
export const authLogin = credentials => async (
  dispatch,
  _,
  { getFirebase }
) =>  {
  try {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    // firebase auth example
    await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    // firestore query example
    const eventsSnapshot = await firestore.collection("events").get();
    console.log(eventsSnapshot.forEach(event => ({ id: event.id, ...event.data()})));

    dispatch({ type: AUTH_LOGIN, payload: credentials });
    dispatch(closeModal('LoginModal', {}));
  } catch (error) {
    console.error(error.code + ' ' + error.message);
  }
}

/**
 * AUTH SIGNUP ACTION
 */
export const authSingUp = credentials => async dispatch => {
  dispatch({ type: AUTH_SIGN_UP, payload: credentials });
  dispatch(closeModal('RegisterModal', {}));
}

/**
 * AUTH LOGOUT ACTION
 */
export const authLogOut = () => ({
  type: AUTH_LOGOUT
});