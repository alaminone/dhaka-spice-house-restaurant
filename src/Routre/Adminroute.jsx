import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAdmin from "../huks/admin/useAdmin";


// eslint-disable-next-line react/prop-types
const Adminroute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const [isAdmin,isLoading] = useAdmin();
    const negetiv = useNavigate();
  if(loading || isLoading) return <span className="loading loading-bars loading-lg"></span>

  if (user && isAdmin) return children;

  return  negetiv('/')
};

export default Adminroute;