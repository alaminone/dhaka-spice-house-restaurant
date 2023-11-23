
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../huks/carthuk/useCart";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosURL();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/cart/${item._id}`)
          .then((response) => {
            if (response.data) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            } else {
              Swal.fire("Error", "Failed to delete the item.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire("Error", "Failed to delete the item.", "error");
          });
      }
    });
  };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <SectionTitle
        subheading={"Hurry Up!"}
        mainheading={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-2xl">Total Items: {cart.length}</h3>
        <h3 className="text-1xl">Total Price: ${total}</h3>
        <Link to="/dashbord/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>
      <div className="overflow-x-auto mx-16 rounded-t-xl">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-black text-xl font-semibold">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black text-xl">
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
