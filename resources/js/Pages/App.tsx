import { RouterProvider } from "react-router/dom";
import AppRoutes from "../services/routes/AppRoutes";

export default function App() {
    return <RouterProvider router={AppRoutes} />;
}
