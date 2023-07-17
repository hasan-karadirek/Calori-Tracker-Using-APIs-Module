import { SEARCH_BUTTON_ID,SEARCH_INPUT_ID } from "../constants.js"

export const createSearchBarElement=()=>{
     const element = document.createElement("div")
     element.id="food-search-form"
     element.innerHTML=String.raw`
     <input type="text" id="${SEARCH_INPUT_ID}">
     <button id="${SEARCH_BUTTON_ID}">search</button>`
     return element
}