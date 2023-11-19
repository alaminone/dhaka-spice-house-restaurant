import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import useAxiosOpen from "../../huks/openapi/useAxiosOpen";
import { useNavigate } from "react-router-dom";

const Googlelogin = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const axiosopenApi = useAxiosOpen();
  const naviget = useNavigate()


  const handleGooglelogin = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };

        axiosopenApi.post("/users", userInfo).then((res) => {
          console.log(res);
        });
        naviget('/')
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGooglelogin}
          className="btn w-3/5 mx-auto btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default Googlelogin;
