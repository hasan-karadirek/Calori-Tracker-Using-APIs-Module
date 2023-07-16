import { SIGN_UP_BUTTON_ID, USER_INTERFACE_ID } from "../constants.js"
import { createWelcomeElement } from "../views/welcomeView.js"

import { initSearchPage } from "./searchPage.js"

export const initWelcomePage = () => {

   
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    const welcomeElement=createWelcomeElement()
    userInterface.appendChild(welcomeElement)
    
    
    


    document.getElementById("start-button").addEventListener("click",()=>{
        initSearchPage()
    })
    
}