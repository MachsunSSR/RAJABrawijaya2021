import React, { useContext, useEffect, useState } from "react";
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory,
} from "react-router-dom";
import routes from "../routes";
import Sidebar from "./sidebar";
import Header from "./Navbar";
import Main from "./Main";
import { SidebarContext } from "../context/SidebarContext";
import { UserContext } from "../context/UserContext";
import $ from "jquery";
import swal from "sweetalert";
import { AuthContext } from "../context/GlobalState";

function Layout() {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
    let location = useLocation();
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    const { setLogout } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (user.kelompok == 0 || user.kelompok === null) {
            $.ajax({
                type: "GET",
                url: "https://rajabrawijaya.ub.ac.id/api/maba/dashboard",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(
                        "Authorization",
                        `Bearer ${token.access_token}`
                    );
                },
                data: {},
                success: function (res) {
                    if (res.status === "success") {
                        if (
                            res.data.cluster == null ||
                            res.data.cluster == undefined
                        ) {
                            history.push("/apps/pendataan");
                        } else {
                            setUser({
                                ...user,
                                nim: res.data.nim,
                                nama: res.data.nama,
                                fakultas: res.data.fakultas,
                                jurusan: res.data.jurusan,
                                prodi: res.data.prodi,
                                jenjang: res.data.jenjang,
                                foto: res.data.foto,
                                cluster: res.data.cluster,
                                kelompok: res.data.kelompok,
                                sosmed: res.data.sosmed,
                                teman_sekelompok: res.data.teman_sekelompok,
                                perizinan: res.data.perizinan,
                            });
                        }
                    } else {
                        history.push("/apps/login");
                    }
                    // successLogin();
                },
                statusCode: {
                    401: () => {
                        setLogout();
                        history.push("/apps/login");
                    },
                },
                error: () => {
                    swal(
                        "Website Sedang Down",
                        `Aduahhh ada apa iniii... duahh. Coba logout terus login lagi deh`,
                        "error"
                    );
                },
                complete: () => {
                    setLoading(false);
                },
            });
        }

        closeSidebar();
    }, []);

    return (
        <div>
            <div
                className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
                    isSidebarOpen && "overflow-hidden"
                }`}
            >
                <Sidebar />

                <div className="flex flex-col flex-1 w-full">
                    <Header />
                    <Main>
                        <Switch>
                            {routes.map((route, i) => {
                                return route.component ? (
                                    <Route
                                        key={i}
                                        exact={true}
                                        path={`/apps${route.path}`}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                ) : null;
                            })}
                            <Redirect exact from="/apps" to="/apps/dashboard" />
                        </Switch>
                    </Main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
