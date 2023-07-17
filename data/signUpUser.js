export const signUpUserToApi=(name,email,password)=>{
    return new Promise((resolve,reject)=>{
        const API_URL = "https://trackapi.nutritionix.com/v2/auth/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
            password: password,
            email: email,
            first_name: name,
            timezone: "Europe/Amsterdam",
          }
      ),
    };
        fetch(API_URL,options)
        .then(res=>{
            if(res.ok){
                resolve(res.json())
            }else{
                reject(new Error("signup error"))
            }
        })
        
    })
}