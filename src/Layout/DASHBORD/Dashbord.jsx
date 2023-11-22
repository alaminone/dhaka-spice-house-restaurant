import {
  FaBook,
  // FaBookMedical,
  FaCalendarAlt,
  FaFileContract,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  // FaStreetView,
  FaUserMinus,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../huks/carthuk/useCart";
import useAdmin from "../../huks/admin/useAdmin";

const Dashbord = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
 
  // 
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex">
        {/* layout bar */}
        <div className="min-h-screen w-3/12  bg-[#D1A054]">
          {/*  */}
          <div className="flex justify-center items-center m-3">
            <img
              className=" "
              src={"https://i.ibb.co/9NcfkB8/logo-no-background.png"}
              alt=""
            />
          </div>
          <ul className="menu p-4 w-8/12">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="additems">
                    {" "}
                    <FaUtensils></FaUtensils> Add an Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageitems">
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook></FaBook> Manage Bookings(not implemented)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) 
            : 
            (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
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
                  <NavLink to="cart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <span className="badge inl badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {/* <li>
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
            <li>
              <NavLink to="/">
                <FaStreetView></FaStreetView> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaBookMedical></FaBookMedical> My Booking
              </NavLink>
            </li> */}

            {/* common */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/menu">
                {" "}
                <FaUserMinus></FaUserMinus> Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaShoppingBag></FaShoppingBag> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaFileContract></FaFileContract> Contact
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
