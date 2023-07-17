import { SIGN_UP_FORM_ID } from "../constants.js";

export const createSignUpFormElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <form id=${SIGN_UP_FORM_ID}>
        <input type="fName" id="fName">
      <input type="email" id="email" name="email">
      <input type="password" id="password" name="password">
      <input type="submit" id="submit-sign-up">
      
    </form>
    `;
    return element;
}