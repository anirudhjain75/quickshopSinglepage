const initialState = {
    name: '',
    email: '',
    jwt: '',
    expirationTime: '',
    refreshToken: '',
    error: '',
    loggedIn: false,
    login: false,
};

export default (state = initialState, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}