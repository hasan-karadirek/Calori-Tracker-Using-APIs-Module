import { getCookies } from "../src/helpers/cookies.js";

export const fetchUserFoodLogs=(begin,end)=>{
    // const userObj=JSON.parse(getCookies("userObj"))
    
    // const API_URL = `https://trackapi.nutritionix.com/v2/reports/totals/${userObj.user.id}`;
    // const options = {
    //   method: "GET",
    //   mode:"no-cors",
    //   query:{"begin":"2023-07-17","end":"2023-07-17"},
      
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-user-jwt":userObj.user.userJwt
    //   },
    // };
    // return new Promise((resolve,reject)=>{
    //     fetch(API_URL,options)
    //     .then(res=>console.log(res))
    // })

    const foodLogs=JSON.parse(window.localStorage.getItem("foodLogs"))

    return foodLogs
}