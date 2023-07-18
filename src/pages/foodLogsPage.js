import { fetchUserFoodLogs } from "../../data/userFoodLogs.js"
import { DAY_RANGE_ID, USER_INTERFACE_ID } from "../constants.js"
import { calculateMakros } from "../helpers/calculator.js"
import { createDayRangeElement, createFoodLogsElement } from "../views/foodLogsView.js"
import { createUserMenuElement } from "../views/userMenuView.js"

export const initFoodLogsPage=()=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const userMenuElement=createUserMenuElement()
    userInterface.appendChild(userMenuElement)
    const rangeDiv=createDayRangeElement()
    userInterface.appendChild(rangeDiv)
    const userFoodLogs=fetchUserFoodLogs()
    const rangedDailyMakros=calculateMakros(userFoodLogs,1)
    const logElement=createFoodLogsElement(rangedDailyMakros,userFoodLogs)
    userInterface.appendChild(logElement)
    console.log(rangedDailyMakros)

    const rangeElements=document.getElementsByClassName(DAY_RANGE_ID)
    for(const element of rangeElements){
        element.addEventListener("click",(event)=>{
            console.log(event.srcElement.dataset.value)
            showDaysLog(userFoodLogs,event.srcElement.dataset.value)
        })

    }
    
    

}
const showDaysLog=(userFoodLogs,numDays)=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const userMenuElement=createUserMenuElement()
    userInterface.appendChild(userMenuElement)
    const rangedDailyMakros=calculateMakros(userFoodLogs,numDays)
    const logElement=createFoodLogsElement(rangedDailyMakros,userFoodLogs)
    userInterface.appendChild(logElement)

}