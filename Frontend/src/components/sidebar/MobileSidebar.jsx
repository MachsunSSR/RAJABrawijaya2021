import React, { useContext } from "react";
import SidebarContent from "./SidebarContent";
import { Transition, Backdrop } from "@windmill/react-ui";
import { SidebarContext } from "../../context/SidebarContext";

function MobileSidebar() {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

    return (
        <>
            <Transition
                show={isSidebarOpen}
                enter="transition ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Backdrop onClick={closeSidebar} />
            </Transition>

            <Transition
                show={isSidebarOpen}
                enter="transition ease-in-out duration-300"
                enterFrom="opacity-0 transform -translate-x-80"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 transform -translate-x-80"
            >
                <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white lg:hidden dark:bg-gray-800">
                    <SidebarContent />
                </aside>
            </Transition>
        </>
    );
}

export default MobileSidebar;
