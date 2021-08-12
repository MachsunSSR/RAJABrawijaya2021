import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthProvider } from "./context/GlobalState";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import App from "./App";

ReactDOM.render(
    <AuthProvider>
        <SidebarProvider>
            <React.StrictMode>
                <Suspense fallback={<ThemedSuspense />}>
                    <Windmill usePreferences>
                        <App />
                    </Windmill>
                </Suspense>
            </React.StrictMode>
        </SidebarProvider>
    </AuthProvider>,
    document.getElementById("root")
);
