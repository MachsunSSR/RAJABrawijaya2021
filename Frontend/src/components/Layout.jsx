import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../routes";
import Sidebar from "./sidebar";
import Header from "./Navbar";
import Main from "./Main";
import { SidebarContext } from "../context/SidebarContext";

function Layout() {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
    let location = useLocation();

    useEffect(() => {
        closeSidebar();
    }, [location]);

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
                                        path={`/app${route.path}`}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                ) : null;
                            })}
                            <Redirect exact from="/app" to="/app/dashboard" />
                        </Switch>
                    </Main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
