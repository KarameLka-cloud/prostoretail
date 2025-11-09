import { createBrowserRouter } from "react-router";
import { ROUTES } from "@constants/routes";
import HomeLayout from "@layouts/HomeLayout";
import AdminLayout from "@layouts/AdminLayout";
import Home from "@pages/Home/Home";
import Admin from "@pages/Admin/Admin";
import Guarantee from "@pages/Home/Services/Guarantee";
import Credit from "@pages/Home/Services/Credit";
import Contacts from "@pages/Home/Services/Contacts";
import About from "@pages/Home/Services/About";

const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [
            {
                path: ROUTES.ROOT,
                element: <Home />,
            },
            {
                path: ROUTES.GUARANTEE,
                element: <Guarantee />,
            },
            {
                path: ROUTES.CREDIT,
                element: <Credit />,
            },
            {
                path: ROUTES.CONTACTS,
                element: <Contacts />,
            },
            {
                path: ROUTES.ABOUT,
                element: <About />,
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
