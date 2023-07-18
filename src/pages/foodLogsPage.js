import { fetchUserFoodLogs } from '../../data/userFoodLogs.js';
import {
  DAY_RANGE_ID,
  FOOD_LOGS_ID,
  SEARCH_PAGE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { calculateMakros } from '../helpers/calculator.js';
import {
  createDayRangeElement,
  createFoodLogsElement,
} from '../views/foodLogsView.js';
import { createUserMenuElement } from '../views/userMenuView.js';
import { initSearchPage } from './searchPage.js';

export const initFoodLogsPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const userMenuElement = createUserMenuElement();
  userInterface.appendChild(userMenuElement);
  const rangeDiv = createDayRangeElement();
  userInterface.appendChild(rangeDiv);
  const userFoodLogs = fetchUserFoodLogs();
  const rangedDailyMakros = calculateMakros(userFoodLogs, 1);
  const logElement = createFoodLogsElement(rangedDailyMakros, userFoodLogs);
  userInterface.appendChild(logElement);
  

  const rangeElements = document.getElementsByClassName(DAY_RANGE_ID);
  //add event listener to range elements (today,7 days,14 days)
  for (const element of rangeElements) {
    element.addEventListener('click', event => {
      
      showDaysLog(userFoodLogs, event.srcElement.dataset.value);
    });
  }
  //add event listener to switch search/home page
  document.getElementById(SEARCH_PAGE_ID).addEventListener('click', () => {
    initSearchPage();
  });

  document.getElementById(FOOD_LOGS_ID).classList.add('selected');
  document.getElementById(SEARCH_PAGE_ID).classList.remove('selected');
};
const showDaysLog = (userFoodLogs, numDays) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const userMenuElement = createUserMenuElement();
  userInterface.appendChild(userMenuElement);
  const rangeDiv = createDayRangeElement();
  userInterface.appendChild(rangeDiv);
  const rangedDailyMakros = calculateMakros(userFoodLogs, numDays);
  const logElement = createFoodLogsElement(rangedDailyMakros, userFoodLogs);
  userInterface.appendChild(logElement);

  document.getElementById(SEARCH_PAGE_ID).addEventListener('click', () => {
    initSearchPage();
  });

  const rangeElements = document.getElementsByClassName(DAY_RANGE_ID);
  for (const element of rangeElements) {
    element.addEventListener('click', event => {
      
      showDaysLog(userFoodLogs, event.srcElement.dataset.value);
    });
  }
};
