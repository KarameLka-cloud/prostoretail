import { createBrowserRouter } from "react-router";
import { ROUTES } from "@constants/routes";
import HomeLayout from "@/layouts/HomeLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Home from "@pages/Home/Home";
import Admin from "@/pages/Admin/Admin";

const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [
            {
                path: ROUTES.ROOT,
                element: <Home />,
            },
        ],
    },
    {
        element: <AdminLayout />,
        children: [
            {
                path: ROUTES.ADMIN,
                element: <Admin />,
            },
        ],
    },
]);

export default router;
