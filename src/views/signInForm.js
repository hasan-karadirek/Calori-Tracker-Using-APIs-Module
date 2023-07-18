import { SIGN_IN_FORM_ID } from "../constants.js";

export const createSignInFormElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <img src="./public/img_avatar2.png" class="avatar">
    <form id=${SIGN_IN_FORM_ID}>
    <label for="email"><b>Email*</b></label>
      <input type="email" placeholder="Enter Your Email" id="email" name="email">
      <label for="password"><b>Password*</b></label>
      <input type="password" placeholder="Enter Your Password" id="password" name="password">
      <input type="submit" id="submit-sign-in">
      
    </form>
    `;
    return element;
}