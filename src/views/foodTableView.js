import { ADD_FOOD_BUTTON_ID, CONSUMED_FOOD_QT_ID } from "../constants.js"

export const createFoodTableElement=(food)=>{
    const element=document.createElement("div")
    element.innerHTML=String.raw`
    <table>
    <tr>
    <th>Photo</th>
    <th>Name</th>
    <th>Unit</th>
    <th>quantity</th>
    </tr>
    <tr>
    <td><img src=${food.photo.thumb}></td>
    <td>${food.food_name}</td>
    <td>${food.serving_unit}</td>
    <td><input id=${CONSUMED_FOOD_QT_ID} type="number"></td>
    <td><button id=${ADD_FOOD_BUTTON_ID}>Add</button></td>
    </tr>

    </table>
    `
    return element
}