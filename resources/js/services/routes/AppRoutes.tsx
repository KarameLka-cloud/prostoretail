import { createBrowserRouter } from "react-router";
import { ROUTES } from "@constants/routes";
import Home from "@pages/Home/Home";

const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Home />,
    },
]);

export default router;
