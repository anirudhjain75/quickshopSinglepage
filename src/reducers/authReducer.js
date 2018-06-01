const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    login: false
};

export default (state = initialState, action) => {
    switch(action.type)
    {
        case 'EMAIL_CHANGED':
            return {
                ...state,
                email: action.payload
            };
        case 'PASSWORD_CHANGED':
            return {
                ...state,
                password: action.payload
            };
        case 'LOGIN_USER':
            return {
                ...state,
                loading: true,
                error: ""
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                ...initialState,
                user: action.payload
            };
        case 'LOGIN_USER_FAIL':
            return {
                ...state,
                error: "Authentication Failed",
                password: "",
                loading: false
            };
        case 'FIRST_NAME_CHANGED':
            return {
                ...state,
                firstName: action.payload
            };
        case 'LAST_NAME_CHANGED':
            return {
                ...state,
                lastName: action.payload
            };
        default:
            return state;
    }
}