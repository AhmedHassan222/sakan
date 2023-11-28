import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
    return <>
        <div className="continer">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>

    </>
}