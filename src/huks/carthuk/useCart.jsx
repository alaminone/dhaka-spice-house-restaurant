import { useQuery } from '@tanstack/react-query';
import useAxiosURL from '../axiosUrl/useAxiosURL';
import  { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';

const useCart = () => {
    const  axiosSecure  = useAxiosURL(); 
    const {user,loading} = useContext(AuthContext)
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart,refetch,loading];
};

export default useCart;
