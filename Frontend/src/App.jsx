import React, { lazy } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/app" component={Layout} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        </>
    );
}
