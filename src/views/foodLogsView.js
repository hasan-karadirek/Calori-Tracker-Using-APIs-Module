import { DAY_RANGE_ID } from "../constants.js"

export const createFoodLogsElement=(rangedFoodLogs,foodLogs)=>{
    const element=document.createElement("div")
    const totalElement=document.createElement("div")
    totalElement.id="total-element"
    totalElement.innerHTML=String.raw`
    <span id="total-title">
    <h3>total in ${Object.keys(rangedFoodLogs).length-1} day(s)</h3>
    </span>
    <span class="total-macro-pair">
    <p>calorie:${rangedFoodLogs["total"].calori}</p>
    <p>protein:${rangedFoodLogs["total"].protein}</p>
    </span>
    <span class="total-macro-pair">
    <p>carb:${rangedFoodLogs["total"].carbohydrate}</p>
    <p>fat:${rangedFoodLogs["total"].fat}</p>
    </span>
    
    `
    element.appendChild(totalElement)
    
    for(const day of Object.keys(rangedFoodLogs)){
        if(day!=="total"){
        const dayDiv=document.createElement("div")
        dayDiv.id="day-container"
        const dayReport=document.createElement("div")
        dayReport.id="day-report"
        dayReport.innerHTML=String.raw`
        <h4 class="date-of-day">${day}</h4>
        <h5 class="macros-of-day">Total Calorie:<span>${rangedFoodLogs[day].calori}</span></h5>
        <h5 class="macros-of-day">Total protein:<span>${rangedFoodLogs[day].protein}</span></h5>
        <h5 class="macros-of-day">Total carbonhydrate:<span>${rangedFoodLogs[day].carbonhydrate}</span></h5>
        <h5 class="macros-of-day">Total fat:<span>${rangedFoodLogs[day].fat}</span></h5>
        `
        dayDiv.appendChild(dayReport)
        
        for(const log of Object.keys(foodLogs[day])){
            const logElement=document.createElement("div")
            logElement.id="log-element"
            logElement.innerHTML=String.raw`
            
            <p>Food Name:${foodLogs[day][log].foodName}</p>
            <p>calorie:${foodLogs[day][log].calori}</p>
            <p>protein:${foodLogs[day][log].protein}</p>
            <p>carb:${foodLogs[day][log].carbohydrate}</p>
            <p>fat:${foodLogs[day][log].fat}</p>
            <p>quantity:${foodLogs[day][log].qt}</p>
            <p><i>Timestamp:${new Date(parseInt(log)).toISOString().slice(11, 19)}<i></p>
            `
            dayDiv.appendChild(logElement)
        }
        element.appendChild(dayDiv)
    }
    }
    
    return element
}

export const createDayRangeElement=()=>{
    const element = document.createElement("div")
    element.id="day-range-div"
    element.innerHTML=String.raw`
    <h3 class=${DAY_RANGE_ID} data-value=1 >Today</h3>

    <h3 class=${DAY_RANGE_ID} data-value=7 >Last 7 Days</h3>

    <h3 class=${DAY_RANGE_ID} data-value=14 >Last 14 Days</h3>
    `
    return element
}
