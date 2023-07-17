import { SIGN_IN_FORM_ID } from "../constants.js";

export const createSignInFormElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <form id=${SIGN_IN_FORM_ID}>
      <input type="email" id="email" name="email">
      <input type="password" id="password" name="password">
      <input type="submit" id="submit-sign-in">
      
    </form>
    `;
    return element;
}