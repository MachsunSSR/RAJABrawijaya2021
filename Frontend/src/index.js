import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import App from "./App";

ReactDOM.render(
    <SidebarProvider>
        <React.StrictMode>
            <Suspense fallback={<ThemedSuspense />}>
                <Windmill usePreferences>
                    <App />
                </Windmill>
            </Suspense>
        </React.StrictMode>
    </SidebarProvider>,
    document.getElementById("root")
);
