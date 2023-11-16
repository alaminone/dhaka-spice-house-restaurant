import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../huks/carthuk/useCart";

const Dashbord = () => {
  const [cart] = useCart();
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex">
        {/* layout bar */}
        <div className="min-h-screen w-3/12  bg-[#D1A054]">
          {/*  */}
          <div className="flex justify-center items-center m-3">
 <img className=" " src={"https://i.ibb.co/9NcfkB8/logo-no-background.png"} alt="" />
 </div>
          <ul className="menu p-4 w-8/12">
            <li>
              <NavLink to="/">
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaCalendarAlt></FaCalendarAlt> Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaWallet></FaWallet> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashbord/cart">
                <FaShoppingCart></FaShoppingCart> My Cart
                <span className="badge inl badge-secondary">
                  +{cart?.length || 0}
                </span>
              </NavLink>
            </li>
          </ul>
          {/*  */}
        </div>
        {/* content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashbord;
