import { useQuery } from '@tanstack/react-query';
import useAxiosURL from '../axiosUrl/useAxiosURL';

const useCart = () => {
    const { axiosSecure } = useAxiosURL(); // Destructure axiosSecure from the result

    const { data: cart = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get("/cart"); 
            console.log('res from axios', res);
            return res.data;
        },
    });

    return [cart];
};

export default useCart;
