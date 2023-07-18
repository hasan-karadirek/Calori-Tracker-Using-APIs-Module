import { getCookies } from "./helpers/cookies.js"
import { initSearchPage } from "./pages/searchPage.js"
import { initWelcomePage } from "./pages/welcomePage.js"

const loadApp=()=>{
    const userObj=getCookies("userObj")
    if(userObj===null){
        initWelcomePage() 
    }else{
        initSearchPage()
    }
   
}

window.addEventListener("load",loadApp)