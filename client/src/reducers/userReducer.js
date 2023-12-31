import { AUTH,LOGOUT } from "../actionTypes/actionTypes";

const auth = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('auth', JSON.stringify({ ...action?.data }));
            console.log(action?.data)
            return {...state,authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state,authData: null}
        default:
            return state;
    }
};

export default auth;