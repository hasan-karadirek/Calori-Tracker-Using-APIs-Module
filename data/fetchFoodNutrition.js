export const fetchFoodData = () => {
    const query = "apple";
    const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "c12dd982",
        "x-app-key": "49cd856ec390719cf1bd3f7140e874a6",
        "x-remote-user-Id": "0",
        accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        num_servings: 0,
        line_delimited: false,
        use_raw_foods: false,
        include_subrecipe: false,
        lat: 0,
        lng: 0,
        meal_type: 0,
        use_branded_foods: false,
        taxonomy: false,
        ingredient_statement: false,
        last_modified: false,
      }),
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then(res=>console.log(res))
      .catch((error) => console.log(error));
  };
  