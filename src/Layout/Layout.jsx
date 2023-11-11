import { Outlet } from "react-router-dom";
import Footer from "../Pages/shareditem/footer/Footer";
import Navbar from "../Pages/shareditem/navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;