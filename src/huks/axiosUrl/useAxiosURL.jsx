import axios from 'axios';


 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001', 
  });

  const useAxiosURL = () => {
    return axiosSecure;
  };
  
  export default useAxiosURL;