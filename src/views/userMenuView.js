import { FOOD_LOGS_ID } from "../constants.js"

export const createUserMenuElement=()=>{
    const element=document.createElement("ul")
    element.innerHTML=String.raw`
    <li>Home</li>
    <li id=${FOOD_LOGS_ID}>Food Logs</li>
    <li>Stats</li>
    `
    return element
}