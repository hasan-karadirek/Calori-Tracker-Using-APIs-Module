export const addFoodLog=(food,consumedQt,userJwt)=>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;
    const foodLogs=JSON.parse(window.localStorage.getItem("foodLogs"))
    foodLogs[currentDate]=foodLogs[currentDate]===undefined ? {}:foodLogs[currentDate];
    foodLogs[currentDate][Date.now()]={
      foodName:food.food_name,
      calori:food.nf_calories,
      protein:food.nf_protein,
      carbohydrate:food.nf_total_carbohydrate,
      fat:food.nf_total_fat,
      qt:consumedQt
    }
    window.localStorage.setItem("foodLogs",JSON.stringify(foodLogs))
    const API_URL = "https://trackapi.nutritionix.com/v2/log";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-jwt":userJwt
      },
      body: JSON.stringify({
        lat: food.lat,
        lng: food.lng,
        aggregate: food.aggregate,
        aggregate_photo: food.aggregate_photo,
        serving_qty: consumedQt,
        consumed_at: food.consumed_at,
        meal_type: food.meal_type,
        foods: [
          food
        ]
      }),
    };
    return new Promise((resolve,reject)=>{
        fetch(API_URL,options)
        .then(res=>{
            if(res.ok){
                resolve(res.json())
            }else{
                reject(new Error(`${res.status}`))
            }
        })
        .catch(err=>console.log(err.message))

    })
}