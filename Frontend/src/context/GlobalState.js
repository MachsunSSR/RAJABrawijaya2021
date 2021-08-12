import React, { useState, useReducer, createContext } from "react";

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };

        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {props.children}
        </AuthContext.Provider>
    );
};

// export const AuthProvider = (props) => {
//     const [authState, setauthState] = useState({
//         token: "",
//         nim: "",
//         nama: "",
//         fakultas: "",
//         jurusan: "",
//         prodi: "",
//         jenjang: "",
//         foto: "",
//         cluster: "",
//         kelompok: "",
//         sosmed: "",
//         teman_sekelompok: [],
//     });

//     return (
//         <AuthContext.Provider value={[authState, setauthState]}>
//             {props.children}
//         </AuthContext.Provider>
//     );
// };
