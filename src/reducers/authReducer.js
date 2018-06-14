const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    jwt: '',
    expirationTime: '',
    refreshToken: '',
    error: '',
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
        case 'LOGIN':
            return {
                ...state,
                email: '',
                password: '',
                jwt: action.payload.token,
                expirationTime: action.payload.expires,
                refreshToken: action.payload.refresh_token,
                login: true
            }
        case 'LOGIN_ERROR': {
            return {
                ...state,
                error: action.payload,
                password: '',
                login: false
            }
        }

        default:
            return state;
    }
}