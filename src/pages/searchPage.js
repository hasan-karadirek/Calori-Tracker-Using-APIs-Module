import { USER_INTERFACE_ID,SEARCH_BUTTON_ID,SEARCH_INPUT_ID, ADD_FOOD_BUTTON_ID, CONSUMED_FOOD_QT_ID, SYSTEM_MESSAGE_ID, FOOD_LOGS_ID, SEARCH_PAGE_ID } from "../constants.js"
import { createSearchBarElement } from "../views/searchBarView.js"
import { fetchFoodData} from "../../data/fetchFoodNutrition.js"
import { createFoodTableElement } from "../views/foodTableView.js"
import { addFoodLog } from "../../data/addFoodLog.js"
import { createSystemMessageElement } from "../views/systemMessageView.js"
import { getCookies } from "../helpers/cookies.js"
import { createUserMenuElement } from "../views/userMenuView.js"
import { initFoodLogsPage } from "./foodLogsPage.js"
export const initSearchPage=()=>{
    const userInterface=document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML=""
    const userMenuElement=createUserMenuElement()
    userInterface.appendChild(userMenuElement)
    const searchBar=createSearchBarElement()
    userInterface.appendChild(searchBar)
    document.getElementById(SEARCH_BUTTON_ID).addEventListener("click",()=>{
        const searchInput=document.getElementById(SEARCH_INPUT_ID)
        listSearchedFood(searchInput.value)
        
    })
    document.getElementById(FOOD_LOGS_ID).addEventListener("click",()=>{
        initFoodLogsPage()
    })

    document.getElementById(SEARCH_PAGE_ID).classList.add("selected")
    document.getElementById(FOOD_LOGS_ID).classList.remove("selected")

}
async function listSearchedFood(searchInput){
    try {
        const userInterface=document.getElementById(USER_INTERFACE_ID)
       
        if(document.getElementById("food-table")!==null){
            document.getElementById("food-table").remove()
        }

        const food=await fetchFoodData(searchInput).then(res=>{return res["foods"][0]})
        console.log(food)
        const foodTable=createFoodTableElement(food)
        userInterface.appendChild(foodTable)
        document.getElementById(ADD_FOOD_BUTTON_ID).addEventListener("submit",(event)=>{
            event.preventDefault()
            const consumedQt=document.getElementById(CONSUMED_FOOD_QT_ID).value
            addFood(food,consumedQt)
        })
    } catch (error) {
        createSystemMessageElement(error.message)
    }
}

async function addFood(food,consumedQt){
    try {
        const userObj=JSON.parse(getCookies("userObj"))
    const cookieArr=decodeURIComponent(document.cookie).split(";")
    let userJwt=userObj["x-user-jwt"]
    const foodLog=await addFoodLog(food,consumedQt,userJwt)
    const message=`${foodLog.foods[0].food_name} is added `
    const systemMessageElement=createSystemMessageElement(message)
    const systemMessageDiv=document.getElementById(SYSTEM_MESSAGE_ID)
    systemMessageDiv.appendChild(systemMessageElement)
    setTimeout(()=>{
        systemMessageDiv.innerHTML=""
    },15000)
    } catch (error) {
        createSystemMessageElement(error.message)
    }
    

}

