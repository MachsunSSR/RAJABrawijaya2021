import React from "react";
import routes from "../../../routes/apps/sidebar";
import { NavLink } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";

export default function SidebarContent() {
    return (
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <a
                className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                href="#"
            >
                Windmill
            </a>
            <ul className="mt-6">
                {routes.map((route) =>
                    route.routes ? (
                        <SidebarSubmenu route={route} key={route.name} />
                    ) : (
                        <li
                            className="relative hover:bg-purple-600 hover:text-white transition duration-500 cursor-pointer rounded"
                            key={route.name}
                        >
                            <NavLink
                                exact
                                to={route.path}
                                className="inline-flex items-center w-full text-sm font-semibold px-6 py-3"
                                activeClassName="text-white bg-purple-600 rounded"
                            >
                                <span className="ml-4 ">{route.name}</span>
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
            <div className="px-6 my-6">
                <button className="bg-purple-600 rounded px-3 py-2 text-white font-semibold hover:bg-purple-500 transition-bg duration-300">
                    Landing Page
                    {/* <Icon className="w-5 h-5" icon="back" /> */}
                </button>
            </div>
        </div>
    );
}
