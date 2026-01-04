// import styles from "./HomeLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "@components/Home/Header/Header";
import Main from "@components/Home/Main/Main";
import Footer from "@components/Home/Footer/Footer";

export default function HomeLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}
