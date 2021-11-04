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
import PenilaianManual from "./pages/PenilaianManual";
import PenilaianGaung from "./pages/PenilaianGaung";
import PenilaianTransformer from "./pages/PenilaianTransformer";
import PenilaianBiskuit from "./pages/PenilaianBiskuit";
import CekSayembara from "./pages/CekSayembara";
import CekPerizinan from "./pages/CekPerizinan";
const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));
const Pendataan = lazy(() => import("./pages/Pendataan"));
const PendataanV2 = lazy(() => import("./pages/PendataanV2"));

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

                    {/* Internal Route */}
                    <Route
                        path="/apps/internal/hidden/penilaian-dharma"
                        exact
                        component={PenilaianManual}
                    />
                    <Route
                        path="/apps/internal/hidden/sayembara-oh"
                        exact
                        component={CekSayembara}
                    />
                    <Route
                        path="/apps/internal/hidden/penilaian-gaung"
                        exact
                        component={PenilaianGaung}
                    />
                    <Route
                        path="/apps/internal/hidden/penilaian-transformer"
                        exact
                        component={PenilaianTransformer}
                    />
                    <Route
                        path="/apps/internal/hidden/penilaian-biskuit"
                        exact
                        component={PenilaianBiskuit}
                    />
                    <Route
                        path="/apps/internal/hidden/cek-perizinan-oh"
                        exact
                        component={CekPerizinan}
                    />

                    {/* RAJA Apps Routes */}
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
                    <PrivateRoute
                        path="/apps/pendataan-oh"
                        exact
                        component={PendataanV2}
                    />
                    <PrivateRoute path="/apps" component={Layout} />
                    <Redirect from="/" to="/apps" />
                </Switch>
            </Router>
        </>
    );
}
