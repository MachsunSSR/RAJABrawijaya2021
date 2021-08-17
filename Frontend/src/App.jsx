import React, { lazy, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { AuthContext } from "./context/GlobalState";
const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));
const Pendataan = lazy(() => import("./pages/Pendataan"));

export default function App() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
            <Router>
                <Switch>
                    {/* {!state.isAuthenticated ? (
                        <Redirect to={{ pathname: "/apps" }} />
                    ) : (
                        <Redirect to={{ pathname: "/login" }} />
                    )} */}
                    <PublicRoute
                        restricted={isAuthenticated}
                        path="/apps/login"
                        component={Login}
                    />
                    <PrivateRoute
                        path="/apps/pendataan"
                        exact
                        component={Pendataan}
                    />
                    <PrivateRoute path="/apps" component={Layout} />
                    <Redirect from="/" to="/apps" />
                </Switch>
            </Router>
        </>
    );
}
