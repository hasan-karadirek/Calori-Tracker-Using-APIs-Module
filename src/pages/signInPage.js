import { signInUserToApi } from "../../data/signInUser.js";
import { SIGN_IN_FORM_ID, USER_INTERFACE_ID } from "../constants.js";
import { createSignInFormElement } from "../views/signInForm.js";
import { initSearchPage } from "./searchPage.js";


export const initSignInPage=()=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const signInForm=createSignInFormElement()
    userInterface.appendChild(signInForm)

    document.getElementById(SIGN_IN_FORM_ID).addEventListener("submit",(event)=>{
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value
        signInUser(email,password)
        
    })
}

async function signInUser(email,password){
    try {
        const userObj=await signInUserToApi(email,password)
        document.cookie="userObj="+JSON.stringify(userObj)+";domain=;path=/"
        initSearchPage()
        
    } catch (error) {
        alert(error.message)
    }
    
}