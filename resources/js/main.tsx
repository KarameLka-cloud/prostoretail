import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@/styles/global.scss";
import App from "./pages/App";

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
