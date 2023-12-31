import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../huks/carthuk/useCart";
import useAdmin from "../../../huks/admin/useAdmin";




const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
 const [cart] = useCart();
 const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

    const sharenavlink =<>
    <li ><Link to={"/"}>Home</Link></li>
    <li ><Link to={"/order/salad"}>Order Now</Link></li>
    <li ><Link to={"/menu"}>Menu</Link></li>

    <li>
            <Link to="/dashbord/cart">
                <button className=" gap-2">
                    <FaShoppingCart className="text-2xl"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length }</div>
                </button>
            </Link>
        
        </li>

        {
            user && isAdmin && <li><Link to="/dashbord/adminhome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashbord/userhome">Dashboard</Link></li>
        }


    {
            user ? <>
            <p>{user?.displayName}</p>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-slate-800 fixed z-10 opacity-70 text-white max-w-7xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
       {sharenavlink}
      </ul>
    </div>
    <img className="w-1/4" src={"https://i.ibb.co/8M0Cp50/logo-color.png"} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    {sharenavlink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;