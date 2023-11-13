import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shareditem/footer/Footer";
import Navbar from "../Pages/shareditem/navbar/Navbar";


const Layout = () => {
    const location = useLocation();
    const isloginout = location.pathname.includes('login')
    return (
        <div>
            {isloginout || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isloginout || <Footer></Footer>}
        </div>
    );
};

export default Layout;