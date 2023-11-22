import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import Swal from "sweetalert2";
import {  NavLink } from "react-router-dom";

const Manageitem = () => {
  const [menu, loading, refetch] = useMenuhuk();
  const axiosSecure = useAxiosURL();
  //
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", `${item.name} has been deleted.`, "success");
          }
        });
      }
    });
  };

  if (loading) return <p> lodding......</p>;
  return (
    <div className="max-w-7xl">
      <SectionTitle
        subheading={"Hurry Up!"}
        mainheading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="overflow-x-auto mx-16 rounded-t-xl shadow-lg">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-black text-xl font-medium">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td className="text-right">${item.price}</td>
                <td>
               <NavLink to={`/dashbord/updateitem/${item._id}`}>
               <button className="btn btn-ghost bg-[#D1A054]  text-white">
                    <FaEdit></FaEdit>
                  </button>
               </NavLink>
                </td>
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
    </div>
  );
};

export default Manageitem;
