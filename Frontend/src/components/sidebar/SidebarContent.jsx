import React, { useContext } from "react";
import routes from "../../routes/sidebar";
import { NavLink } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import * as Icons from "../../assets/icons";
import { Button } from "@windmill/react-ui";
import { SidebarContext } from "../../context/SidebarContext";

function Icon({ icon, ...props }) {
    const Icon = Icons[icon];
    return <Icon {...props} />;
}

export default function SidebarContent() {
    const { closeSidebar } = useContext(SidebarContext);
    return (
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <a
                className="ml-6 text-xl font-bold text-gray-800 dark:text-gray-200"
                href="#"
            >
                RAJA Apps
            </a>
            <ul className="mt-6">
                {routes.map((route) =>
                    route.routes ? (
                        <SidebarSubmenu route={route} key={route.name} />
                    ) : (
                        <li
                            className="relative hover:bg-purple-600 hover:text-white transition duration-500 cursor-pointer rounded mb-2"
                            key={route.name}
                        >
                            <NavLink
                                exact
                                onClick={closeSidebar}
                                to={route.path}
                                className="inline-flex items-center w-full text-md font-semibold px-6 py-3 "
                                activeClassName="text-white bg-purple-600 rounded"
                            >
                                <Icon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    icon={route.icon}
                                />
                                <span className="ml-4 ">{route.name}</span>
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
            <div className="px-6 my-6">
                {/* className="bg-purple-600 rounded px-3 py-2 text-white font-semibold hover:bg-purple-500 transition-bg duration-300" */}
                <a href="https://rajabrawijaya.ub.ac.id/#/">
                    <Button>
                        Landing Page
                        <Icon className="w-6 h-4 ml-2" icon="backIcon" />
                    </Button>
                </a>
            </div>
        </div>
    );
}
