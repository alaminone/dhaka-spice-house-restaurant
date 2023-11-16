import axios from "axios";

const axiosopenApi = axios.create({
    baseURL: 'http://localhost:5001', 
  });
const useAxiosOpen = () => {
    return axiosopenApi;
};

export default useAxiosOpen;