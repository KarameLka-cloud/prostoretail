import { Outlet } from "react-router";
import Header from "@/components/Layouts/Home/Header/Header";
import Footer from "@/components/Layouts/Home/Footer/Footer";

export default function HomeLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
