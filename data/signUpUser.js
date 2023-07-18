export const signUpUserToApi = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const API_URL = 'https://trackapi.nutritionix.com/v2/auth/signup';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email,
        first_name: name,
        timezone: 'Europe/Amsterdam',
      }),
    };
    fetch(API_URL, options)
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        } else if (res.status === 400) {
          reject(new Error('Please type a valid password.(min 6 characters)'));
        } else if (res.status === 409) {
          reject(
            new Error(
              'This email is already registered please provide a valid email.'
            )
          );
        } else {
          reject(new Error(`Error Code:${res.status}`));
        }
      })
      .catch(error => {
        return error;
      });
  });
};
