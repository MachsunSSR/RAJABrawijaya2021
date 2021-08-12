import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
    MenuIcon,
    OutlinePersonIcon,
    OutlineCogIcon,
    OutlineLogoutIcon,
} from "../assets/icons";
import { Avatar, Dropdown, DropdownItem } from "@windmill/react-ui";
import { AuthContext } from "../context/GlobalState";

export default function Navbar() {
    const { toggleSidebar } = useContext(SidebarContext);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { state, dispatch } = useContext(AuthContext);

    function handleProfileClick() {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800 shadow">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-500">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* <!-- Search input --> */}
                <span></span>
                <ul
                    className="flex items-center flex-shrink-0 space-x-6 cursor-pointer hover:shadow-md px-4 py-2 rounded transition-bg duration-200"
                    key={isProfileMenuOpen.toString()}
                    onClick={handleProfileClick}
                >
                    <li className="text-black font-semibold dark:text-gray-200">
                        Safir Rahmahuda Machsun
                    </li>
                    {/* <!-- Profile menu --> */}
                    <li className="relative">
                        <button
                            className="rounded-full focus:shadow-outline-purple focus:outline-none"
                            aria-label="Account"
                            aria-haspopup="true"
                        >
                            <Avatar
                                className="align-middle"
                                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <Dropdown
                            align="right"
                            isOpen={isProfileMenuOpen}
                            onClose={() => setIsProfileMenuOpen(false)}
                        >
                            <DropdownItem
                                onClick={() => dispatch({ type: "LOGOUT" })}
                            >
                                <OutlineLogoutIcon
                                    className="w-4 h-4 mr-3"
                                    aria-hidden="true"
                                />
                                <span>Log out</span>
                            </DropdownItem>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </header>
    );
}
