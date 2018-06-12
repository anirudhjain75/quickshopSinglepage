import authReducer from '../authReducer';
import {emailChange, passChange, FirstNameChange, LastNameChange} from "../../actions";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    login: false
};

test("email change", () => {
    const data = "test@test.com";
    expect(authReducer(initialState, emailChange(data))).toMatchSnapshot();
});

test("password change", () => {
    const data = "Minato";
    expect(authReducer(initialState, passChange(data))).toMatchSnapshot();
});

test("first name change", () => {
    const data = "test";
    expect(authReducer(initialState, FirstNameChange(data))).toMatchSnapshot();
});

test("last name change", () => {
    const data = "man";
    expect(authReducer(initialState, LastNameChange(data))).toMatchSnapshot();
});