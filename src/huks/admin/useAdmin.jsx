import { useContext } from "react";
import useAxiosURL from "../axiosUrl/useAxiosURL";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosURL()
   
    const {data: isAdmin,isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin , isLoading]
};

export default useAdmin;