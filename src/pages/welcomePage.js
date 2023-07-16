import { USER_INTERFACE_ID } from "../constants.js"
import { createWelcomeElement } from "../views/welcomeView.js"
import { fetchFoodData } from "../../data/fetchFoodNutrition.js"

export const initWelcomePage = () => {
    fetchFoodData()
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    const welcomeElement=createWelcomeElement()
    userInterface.appendChild(welcomeElement)
    
}