import { SIGN_UP_BUTTON_ID,SIGN_IN_BUTTON_ID} from "../constants.js";


/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
      <h1>Welcome</h1>
      <button id=${SIGN_UP_BUTTON_ID}>Sign Up</button>
      <button id=${SIGN_IN_BUTTON_ID}>Sign In</button>
    `;
    return element;
  };