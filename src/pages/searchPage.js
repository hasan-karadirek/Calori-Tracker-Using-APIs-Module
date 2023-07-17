import { USER_INTERFACE_ID,SEARCH_BUTTON_ID,SEARCH_INPUT_ID } from "../constants.js"
import { createSearchBarElement } from "../views/searchBarView.js"
import { fetchFoodData} from "../../data/fetchFoodNutrition.js"
export const initSearchPage=()=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const searchBar=createSearchBarElement()
    userInterface.appendChild(searchBar)
    document.getElementById(SEARCH_BUTTON_ID).addEventListener("click",()=>{
        const searchInput=document.getElementById(SEARCH_INPUT_ID)
        listSearchedFood(searchInput.value)
        
    })

}
async function listSearchedFood(searchInput){
    const food=await fetchFoodData(searchInput).then(res=>{return res["foods"][0]})
    console.log(food)
    

}