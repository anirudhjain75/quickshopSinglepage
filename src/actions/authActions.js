import firebase from 'firebase';

export const emailChange = (text) => {
    return {
        type: 'EMAIL_CHANGED',
        payload: text
    };
};

export const passChange = (text) => {
    return {
        type: 'PASSWORD_CHANGED',
        payload: text
    };
};

export const FirstNameChange = (text) => {
    return {
        type: 'FIRST_NAME_CHANGED',
        payload: text
    }
};

export const LastNameChange = (text) => {
    return {
        type: 'LAST_NAME_CHANGED',
        payload: text
    }
};

export const signUp = ({email, password, firstName, lastName}) => {
    return (dispatch) => {
        dispatch({type: "SIGNING_UP"})
        if (email && password) {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName
                })
            })
                .then((response) => console.log(response.json()))
                .then(() => dispatch({
                    type: "SIGNUP_SUCCESS",
                }))
        }
    }
};

export const logIn = ({email, password, navigator}) => {
    return(dispatch) => {
        dispatch({type: "LOGGING_IN"});
        if(email && password) {
            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: email,
                    password
                })
            })
                .then((response) => {
                    console.log(response);
                    if (response.ok === true)
                        return response.json();
                    else
                        throw new Error("Invalid username or password");
                })
                .then((responseData) => {
                    console.log(responseData);
                    navigator.dismissAllModals({
                        animation: 'slide-down'
                    })
                    return dispatch({
                        type: "LOGIN",
                        payload: responseData
                    });
                })
                .catch((error) => {
                    console.log(error);
                    return dispatch({
                        type: "LOGIN_ERROR",
                        payload: error
                    })
                })
        }
    }
}