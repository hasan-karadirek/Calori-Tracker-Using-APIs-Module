import { SIGN_UP_BUTTON_ID,SIGN_IN_BUTTON_ID} from "../constants.js";


/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
      <h1>Welcome To Calori App</h1>
      <img id="welcome-image" src="./public/welcome-image.webp">
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
      <span>Please:</span><br>
      <button id=${SIGN_IN_BUTTON_ID}>Sign In</button><br>
      or<br>
      <button id=${SIGN_UP_BUTTON_ID}>Sign Up</button>
      
      
    `;
    return element;
  };