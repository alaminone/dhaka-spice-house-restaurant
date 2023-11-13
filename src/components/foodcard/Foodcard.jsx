import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosURL from "../../huks/axiosUrl/useAxiosURL";


const Foodcard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosURL()

  const handelAddtoCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      axiosSecure.post("/cart", cartItem)
      .then(response => {
        const data = response.data;
        if (data.insertedId) {
          // refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added on the cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(error => {
        // Handle errors here
        console.error('Error adding to cart:', error);
      });
      
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-1 rounded-lg">
        {" "}
        $ {price}
      </p>
      <div className="card-body items-center text-center bg-slate-100">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              handelAddtoCart(item);
            }}
            className="btn btn-outline border-0 text-[#BB8506] border-[#BB8506] border-b-4 uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

Foodcard.propTypes = {
  item: PropTypes.func,
};

export default Foodcard;
