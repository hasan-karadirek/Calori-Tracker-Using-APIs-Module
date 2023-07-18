import { signUpUserToApi } from "../../data/signUpUser.js";
import { SIGN_UP_FORM_ID, USER_INTERFACE_ID } from "../constants.js";
import { createSignUpFormElement } from "../views/signUpFormView.js";
import { initSearchPage } from "./searchPage.js";


export const initSignUpPage=()=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const signUpForm=createSignUpFormElement()
    userInterface.appendChild(signUpForm)

    document.getElementById(SIGN_UP_FORM_ID).addEventListener("submit",(event)=>{
        event.preventDefault()
        const name=event.target.fName.value
        const email=event.target.email.value
        const password=event.target.password.value
        signUpUser(name,email,password)
        
    })
}

async function signUpUser(name,email,password){
    try {
        const userObj=await signUpUserToApi(name,email,password)
        document.cookie="userObj="+JSON.stringify(userObj)+";domain=;path=/"
        window.localStorage.setItem("foodLogs",JSON.stringify({}))
        initSearchPage()
        
    } catch (error) {
        alert(error.message)
        
    }
    
}