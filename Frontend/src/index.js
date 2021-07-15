import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import { Windmill } from "@windmill/react-ui";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <SidebarProvider>
            <Windmill usePreferences>
                <App />
            </Windmill>
        </SidebarProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
