import { DAY_RANGE_ID } from "../constants.js"

export const createFoodLogsElement=(rangedFoodLogs,foodLogs)=>{
    const element=document.createElement("div")
    for(const day of Object.keys(rangedFoodLogs)){
        if(day!=="total"){
        const dayDiv=document.createElement("div")
        const dayTitle=document.createElement("h2")
        dayTitle.textContent=`${day}  Total Calorie:${rangedFoodLogs[day].calori}, Total protein:${rangedFoodLogs[day].protein}, Total carbonhydrate:${rangedFoodLogs[day].carbonhydrate},Total fat:${rangedFoodLogs[day].fat}`
        dayDiv.appendChild(dayTitle)
        for(const log of Object.keys(foodLogs[day])){
            const logElement=document.createElement("div")
            logElement.innerHTML=String.raw`
            <h3>${log}</h3>
            <p>Food Name:${foodLogs[day][log].foodName}</p>
            <p>calorie:${foodLogs[day][log].calori}</p>
            <p>protein:${foodLogs[day][log].protein}</p>
            <p>carb:${foodLogs[day][log].carbohydrate}</p>
            <p>fat:${foodLogs[day][log].fat}</p>
            <p>quantity:${foodLogs[day][log].qt}</p>
            `
            dayDiv.appendChild(logElement)
        }
        element.appendChild(dayDiv)
    }
    }
    const totalElement=document.createElement("div")
    totalElement.innerHTML=String.raw`
    <h3>total</h3>
    <p>calorie:${rangedFoodLogs["total"].calori}</p>
    <p>protein:${rangedFoodLogs["total"].protein}</p>
    <p>carb:${rangedFoodLogs["total"].carbohydrate}</p>
    <p>fat:${rangedFoodLogs["total"].fat}</p>
    `
    element.appendChild(totalElement)
    return element
}

export const createDayRangeElement=()=>{
    const element = document.createElement("div")
    element.innerHTML=String.raw`
    <h3 class=${DAY_RANGE_ID} data-value=1 >Today</h3>

    <h3 class=${DAY_RANGE_ID} data-value=7 >Last 7 Days</h3>

    <h3 class=${DAY_RANGE_ID} data-value=14 >Last 14 Days</h3>
    `
    return element
}