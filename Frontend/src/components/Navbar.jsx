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
import { UserContext } from "../context/UserContext";
import $ from "jquery";

export default function Navbar() {
    const { toggleSidebar } = useContext(SidebarContext);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { setLogout } = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);

    function handleProfileClick() {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    function namaSingkat(nama) {
        if (nama === null || nama === undefined) {
            return;
        }
        const fullName = nama.split(" ");
        return fullName[0] + " " + fullName[1];
    }

    const logout = () => {
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/logout",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {},
            success: function (res) {
                setLogout();
            },
            complete: () => {
                setLogout();
            },
        });
    };

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
                    className="flex items-center flex-shrink-0 space-x-6 cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:shadow-md px-4 py-2 rounded transition-bg duration-200"
                    key={isProfileMenuOpen.toString()}
                    onClick={handleProfileClick}
                >
                    <li className="text-black font-semibold dark:text-gray-200">
                        {namaSingkat(user.nama)}
                    </li>
                    {/* <!-- Profile menu --> */}
                    <li className="relative">
                        <button
                            className="rounded-full focus:shadow-outline-purple focus:outline-none"
                            aria-label="Account"
                            aria-haspopup="true"
                        >
                            <Avatar
                                className="align-middle block dark:bg-white"
                                src="https://image.flaticon.com/icons/png/512/483/483361.png"
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <Dropdown
                            align="right"
                            isOpen={isProfileMenuOpen}
                            onClose={() => setIsProfileMenuOpen(false)}
                        >
                            <DropdownItem onClick={logout}>
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
