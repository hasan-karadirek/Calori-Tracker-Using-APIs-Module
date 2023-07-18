import { SEARCH_BUTTON_ID,SEARCH_INPUT_ID } from "../constants.js"

export const createSearchBarElement=()=>{
     const element = document.createElement("div")
     element.id="food-search-form"
     element.innerHTML=String.raw`
     <label for="search"><b>Search</b></label>
     <input type="text" placeholder="Search" id="${SEARCH_INPUT_ID}">
     <button id="${SEARCH_BUTTON_ID}" name="search">search</button>`
     return element
}