import {
  SIGN_IN_BUTTON_ID,
  SIGN_UP_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initSignUpPage } from './signUpPage.js';
import { initSignInPage } from './signInPage.js';

import { initSearchPage } from './searchPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  document.getElementById(SIGN_UP_BUTTON_ID).addEventListener('click', () => {
    initSignUpPage();
  });
  document.getElementById(SIGN_IN_BUTTON_ID).addEventListener('click', () => {
    initSignInPage();
  });
};
