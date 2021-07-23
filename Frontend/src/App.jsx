import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <Router>
                <Layout />
                <Switch>
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                </Switch>
            </Router>
        </>
    );
}
