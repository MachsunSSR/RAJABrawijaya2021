import React, { lazy, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/GlobalState";
// import { PrivateRoute } from "./routes/PrivateRoute";
const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
    const [state, dispatch] = useContext(AuthContext);
    return (
        <>
            <Router>
                <Switch>
                    {/* {!state.isAuthenticated ? (
                        <Redirect to={{ pathname: "/app" }} />
                    ) : (
                        <Redirect to={{ pathname: "/login" }} />
                    )} */}
                    <Route path="/login" component={Login} />
                    <Route path="/app" component={Layout} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        </>
    );
}
