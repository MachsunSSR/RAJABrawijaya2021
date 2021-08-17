import { useContext } from "react";
import { AuthContext } from "../context/GlobalState";

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error();
    }
    return context;
};

export default useAuth;
