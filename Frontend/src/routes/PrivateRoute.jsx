import { Redirect, Route } from "react-router-dom";
import useAuth from "../helpers/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/apps/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
