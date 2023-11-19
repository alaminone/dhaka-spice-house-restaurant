import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosURL();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        headers:{
          authorization:`Bearer ${localStorage.getItem('jwt-token')}`
        }
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/users/${user._id}`)
          .then((response) => {
            if (response.data) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
    <div className="w-full">
      <Helmet>
        <title>Dhaka Spice | All users</title>
      </Helmet>
      <SectionTitle
        subheading={"How many??"}
        mainheading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <h3 className="text-3xl font-semibold my-4 mx-16">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto mx-16 rounded-t-xl">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-black text-xl font-semibold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-[#D1A054]  text-white"
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
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

export default AllUsers;
