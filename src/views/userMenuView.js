import { FOOD_LOGS_ID, SEARCH_PAGE_ID } from "../constants.js"

export const createUserMenuElement=()=>{
    const element=document.createElement("div")
    element.id="user-menu"
    element.innerHTML=String.raw`
    <button id=${SEARCH_PAGE_ID}>Search & Add</button>
    <button id=${FOOD_LOGS_ID}>Food Logs</button>
    
    `
    return element
}