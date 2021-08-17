import { createContext, useReducer } from "react";

const initialState = {
    isAuthenticated: localStorage.getItem("token") || false,
    userInfo: {},
};

const AuthContext = createContext({
    isAuthenticated: false,
    userInfo: {},
    setLogin: () => {},
    setLogout: () => {},
});

function AuthReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("token", JSON.stringify(action.payload));
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload,
            };
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("accessToken");
            return {
                ...state,
                isAuthenticated: false,
                userInfo: {},
            };
        default:
            break;
    }
}

function AuthProvider({ ...restProps }) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setLogin = (value) => {
        dispatch({
            type: "LOGIN",
            payload: value,
        });
    };

    const setLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                userInfo: state.userInfo,
                setLogin,
                setLogout,
            }}
            {...restProps}
        />
    );
}

export { AuthContext, AuthProvider };
