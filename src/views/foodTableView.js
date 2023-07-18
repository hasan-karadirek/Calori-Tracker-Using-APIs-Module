import { ADD_FOOD_BUTTON_ID, CONSUMED_FOOD_QT_ID } from "../constants.js"

export const createFoodTableElement=(food)=>{
    const element=document.createElement("div")
    element.id="food-table"
    element.innerHTML=String.raw`
    <h1>${food.food_name}</h1>
    <img src=${food.photo.thumb}><br>
    <div class="macros-micros">
    <div class="macros-container">
    <div class="macros-pair">
    <div class="macro"><span>Calories:</span> <p>${food.nf_calories}</p></div>
    <div class="macro"><span>Carbohydrate:</span> <p>${food.nf_total_carbohydrate}</p></div>
    </div><br>
    <div class="macros-pair">
    <div class="macro"><span>Protein:</span> <p>${food.nf_protein}</p></div>
    <div class="macro"><span>Fat:</span> <p>${food.nf_total_fat}</p></div>
    </div>
    </div><br>
    <div class="micros-container">
    <div class="micros-four">
    <div class="micro"><span>Serving Unit:</span> <p>${food.serving_unit}</p></div>
    <div class="micro"><span>Serving Weight(g):</span> <p>${food.serving_weight_grams}</p></div>
    <div class="micro"><span>Serving Quantity:</span> <p>${food.serving_qty}</p></div>
    <div class="micro"><span>Cholesterol:</span> <p>${food.nf_cholesterol}</p></div>
    </div>

    <div class="micros-four">
    <div class="micro"><span>Sodium:</span> <p>${food.nf_sodium}</p></div>
    <div class="micro"><span>Sugars:</span> <p>${food.nf_sugars}</p></div>
    <div class="micro"><span>Fiber:</span> <p>${food.nf_dietary_fiber}</p></div>
    <div class="micro"><span>Potassium:</span> <p>${food.nf_potassium}</p></div>
    </div>
    </div>
    <form id=${ADD_FOOD_BUTTON_ID}>
    <input id=${CONSUMED_FOOD_QT_ID} min="1" placeholder="Quantity" type="number" name="qt">
    <input  type="submit" value="Add ">
    <form>
    `
    return element
}