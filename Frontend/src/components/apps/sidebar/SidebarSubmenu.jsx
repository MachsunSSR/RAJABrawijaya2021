import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@windmill/react-ui";

export default function SidebarSubmenu({ route }) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    function handleDropdownMenuClick() {
        setIsDropdownMenuOpen(!isDropdownMenuOpen);
    }

    return (
        <li className="relative px-6 py-3" key={route.name}>
            <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors "
                onClick={handleDropdownMenuClick}
                aria-haspopup="true"
            >
                <span className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    {/* <Icon
                        className="w-5 h-5"
                        aria-hidden="true"
                        icon={route.icon}
                    /> */}
                    <span className="ml-4">{route.name}</span>
                </span>
                {/* <DropdownIcon className="w-4 h-4" aria-hidden="true" /> */}
            </button>
            <Transition
                show={isDropdownMenuOpen}
                enter="transition-all ease-in-out duration-300"
                enterFrom="opacity-25 max-h-0"
                enterTo="opacity-100 max-h-xl"
                leave="transition-all ease-in-out duration-300"
                leaveFrom="opacity-100 max-h-xl"
                leaveTo="opacity-0 max-h-0"
            >
                <div
                    className="p-2 mt-2 overflow-hidden text-sm font-medium text-gray-500 flex flex-col"
                    aria-label="submenu"
                >
                    {route.routes.map((r) => (
                        <NavLink
                            className="px-4 py-2 transition-colors duration-150 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
                            key={r.name}
                            to={r.path}
                            activeClassName="text-white bg-purple-600 rounded"
                        >
                            {r.name}
                        </NavLink>
                    ))}
                </div>
            </Transition>
        </li>
    );
}
