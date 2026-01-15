import { createBrowserRouter } from "react-router-dom";
import { HOME_ROUTES, ADMIN_ROUTES } from "@constants/routes";
import HomeLayout from "@layouts/HomeLayout/HomeLayout";
import AdminLayout from "@layouts/AdminLayout/AdminLayout";
import Home from "@pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [
            {
                path: HOME_ROUTES.ROOT,
                element: <Home />,
            },
            {
                path: HOME_ROUTES.CATALOG,
                element: <div>Catalog Page</div>,
            },
            {
                path: HOME_ROUTES.INSTALLMENT_PLAN,
                element: <div>Installment plan Page</div>,
            },
            {
                path: HOME_ROUTES.TRADE_IN,
                element: <div>Trade_In Page</div>,
            },
            {
                path: HOME_ROUTES.NEWS,
                element: <div>News Page</div>,
            },
            {
                path: HOME_ROUTES.BUYERS,
                element: <div>Buyers Page</div>,
            },
        ],
    },
    {
        element: <AdminLayout />,
        children: [
            {
                path: ADMIN_ROUTES.ADMIN,
                element: <div>Admin Page</div>,
            },
            {
                path: ADMIN_ROUTES.ADMIN_PERSON,
                element: <div>Admin People Page</div>,
            },
        ],
    },
]);

export default router;
