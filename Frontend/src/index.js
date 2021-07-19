import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import { Windmill } from "@windmill/react-ui";
import App from "./App";

ReactDOM.render(
    <SidebarProvider>
        <React.StrictMode>
            <Windmill usePreferences>
                <App />
            </Windmill>
        </React.StrictMode>
    </SidebarProvider>,
    document.getElementById("root")
);
