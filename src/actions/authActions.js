export const signUp = (user, navigator) => {
  return (dispatch) => {
      fetch('https://f6df4fa5-88fc-4dc2-b05f-e88c99d8b8cd.mock.pstmn.io/sign', {
          method: 'POST',
          body: JSON.stringify({
              email: user.email,
              mobileNumber: user.mobileNumber,
              otp: user.otp,
              name: user.name
          })
      })
              .then((response) => {
                  console.log(response);
                  if(response.ok)
                  {
                      return response.json()
                  }
              })
              .then((responseData) => {
                  console.log(responseData);
                  dispatch({
                      type: 'SIGNING_UP',
                      payload: responseData
                  });
                  navigator.resetTo({
                      screen: 'quickshop.main',
                      title: 'QuickShop'
                  })
              })
      }
};

export const login = (user, navigator) => {
    return (dispatch) => {
        console.log('login');
        fetch('https://f6df4fa5-88fc-4dc2-b05f-e88c99d8b8cd.mock.pstmn.io/login', {
            method: 'POST',
            body: JSON.stringify({
                mobileNumber: user.mobileNumber,
                otp: user.otp
            })
        })
                .then((response) => {
                    if(response.ok)
                    {
                        return response.json()
                    }
                })
                .then((responseData) => {
                    console.log(responseData);
                    dispatch({
                        type: 'LOGIN',
                        payload: responseData
                    });
                    navigator.resetTo({
                        screen: 'quickshop.main'
                    })
                })
    }
};

export const optGen = (mobileNumber) => {
  return (dispatch) => {
      dispatch({
          type: "LOGIN_ATTEMPT"
      });
      fetch('https://f6df4fa5-88fc-4dc2-b05f-e88c99d8b8cd.mock.pstmn.io/otp', {
          method: 'POST',
          body: JSON.stringify({
              mobileNumber
          })
      })
          .then((response) => {
              console.log(response);
              if (response.ok)
              {
                  return response.json()
              }
          })
          .then((responseData) => {
              console.log(responseData);
              dispatch({
                  type: "CURRENT_OTP_CHANGE",
                  payload: responseData.otp
              })
          })
      }
};