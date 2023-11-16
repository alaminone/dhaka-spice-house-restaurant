import { FaGoogle } from "react-icons/fa";
import  { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";



const Googlelogin = () => {

    const {logInWithGoogle} = useContext(AuthContext)
  const loction = useLocation()

    // console.log(first)

 const handleGooglelogin = () =>{
    logInWithGoogle()
    .then(result => {
      console.log(result);
      loction('/')
    })
    .catch(error => {
      console.error('Error during Google sign-in:', error);
    });
 }


    return (
        <div className="w-full">
        <div className="divider"></div>
        <div className="w-full text-center my-4">
            <button onClick={handleGooglelogin} className="btn w-3/5 mx-auto btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    </div>
    );
};

export default Googlelogin;