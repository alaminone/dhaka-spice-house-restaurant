import { useQuery } from '@tanstack/react-query';
import useAxiosURL from '../axiosUrl/useAxiosURL';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';

const useCart = () => {
    const  axiosSecure  = useAxiosURL(); 
    const {user} = AuthProvider(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`); 
            console.log('res from axios', res);
            return res.data;
        },
    });

    return [cart,refetch];
};

export default useCart;
