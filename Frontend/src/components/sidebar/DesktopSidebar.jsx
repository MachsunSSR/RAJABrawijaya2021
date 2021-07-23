import React from "react";

import SidebarContent from "./SidebarContent";

function DesktopSidebar(props) {
    return (
        <aside className="z-30 h-screen flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow">
            <SidebarContent />
        </aside>
    );
}

export default DesktopSidebar;
