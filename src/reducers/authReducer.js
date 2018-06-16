const initialState = {
    name: '',
    mobNo: '',
    email: '',
    jwt: '',
    expirationTime: '',
    refreshToken: '',
    error: '',
    currentOTP: '',
    loggedIn: false,
    login: false,
};

export default (state = initialState, action) => {
    switch(action.type)
    {
        case "MOBILE_NUMBER_CHANGE": {
            return {
                ...state,
                mobNo: action.payload
            }
        }
        case "NAME_CHANGE": {
            return {
                ...state,
                name: action.payload
            }
        }
        case "SIGNING_UP": {
            return {
                ...state
            }
        }
        case "CURRENT_OTP_CHANGE": {
            return {
                ...state,
                currentOTP: action.payload
            }
        }
        default:
            console.log(state);
            return state;
    }
}