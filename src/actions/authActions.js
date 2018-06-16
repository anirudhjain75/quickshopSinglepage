export const signUp = (user) => {
  return (dispatch) => {
      dispatch({
          type: "SIGNING_UP",
          payload: user
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
              phoneNumber: mobileNumber
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