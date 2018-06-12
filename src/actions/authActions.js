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
                    type: "LOGIN_SUCCESS"
                }))
        }
    }
};