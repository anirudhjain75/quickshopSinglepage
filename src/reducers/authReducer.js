const initialState = {
    firstName: 'Guest',
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
                ...INITIAL_STATE,
                user: action.payload
            };
        case 'LOGIN_USER_FAIL':
            return {
                ...state,
                error: "Authentication Failed",
                password: "",
                loading: false
            };
            
        default:
            return state;
    }
}