import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001', 
  });

  const useAxiosURL = () => {
    const {logOut} = useContext(AuthContext)
    const naviget = useNavigate();

    axiosSecure.interceptors.request.use(function (config){
      const token = localStorage.getItem('jwt-token')
      console.log('request stopped by interceptors', token)
      config.headers.authorization = `bearer ${token}`;
      return config;
    },function (error){
      return Promise.reject(error)
    });
    axiosSecure.interceptors.response.use(function (response) {

      return response;
    }, async (error) => {
     const status = error.response.status;
    
     if(status === 401 || status === 403){
      await logOut()
      naviget('/login')
     }
      return Promise.reject(error);
    });

  };
  
  export default useAxiosURL;