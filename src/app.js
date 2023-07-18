import { getCookies } from './helpers/cookies.js';
import { initSearchPage } from './pages/searchPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
    //Controle user session. 
    //if user didnt signin, redirect to welcome page. If they did redirect to search/home page 
  const userObj = getCookies('userObj');
  if (userObj === null) {
    initWelcomePage();
  } else {
    initSearchPage();
  }
};

window.addEventListener('load', loadApp);
