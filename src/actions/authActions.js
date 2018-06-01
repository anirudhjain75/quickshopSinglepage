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

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_USER' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    };
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: 'LOGIN_USER_FAIL'
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: user
    });
};
