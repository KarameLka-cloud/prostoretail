import "./bootstrap";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./Pages/App";

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
