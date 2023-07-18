export const signInUserToApi = (email, password) => {
  return new Promise((resolve, reject) => {
    const API_URL = 'https://trackapi.nutritionix.com/v2/auth/signin';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    };
    fetch(API_URL, options)
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        } else {
          reject(
            new Error(
              'Password or Email is wrong. Please try correct email & password combination'
            )
          );
        }
      })
      .catch(error => {
        return error;
      });
  });
};
