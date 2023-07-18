import { signInUserToApi } from '../../data/signInUser.js';
import { SIGN_IN_FORM_ID, USER_INTERFACE_ID } from '../constants.js';
import { createSignInFormElement } from '../views/signInForm.js';
import { initSearchPage } from './searchPage.js';

export const initSignInPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const signInForm = createSignInFormElement();
  userInterface.appendChild(signInForm);
    //addEventLister for submitting signin form
  document.getElementById(SIGN_IN_FORM_ID).addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password);
  });
};

async function signInUser (email, password) {
  try {
    //signInUserToApi func login user to API and it returns a user object.
    const userObj = await signInUserToApi(email, password);
    document.cookie = 'userObj=' + JSON.stringify(userObj) + ';domain=;path=/';
    window.localStorage.setItem('foodLogs', JSON.stringify({}));
    initSearchPage();
  } catch (error) {
    //if operation is failed this catch block works and catches the error and print it to screen
    createSystemMessageElement(error.message);
  }
}
