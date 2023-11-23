import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
const {user} = useContext(AuthContext);
const axiosSecure = useAxiosURL();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
       <SectionTitle 
       subheading={'At a Glance!'}
       mainheading={'PAYMENT HISTORY'}
       ></SectionTitle>

        <div className="overflow-x-auto mx-16 rounded-t-xl">
            <table className="table w-full">
                {/* head */}
                <thead className="bg-[#D1A054] text-black text-xl font-semibold">
                    <tr>
                        <th>#</th>
                        <th>price</th>
                        <th>Transaction Id</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>${payment.price}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.date}</td>
                        <td>{payment.status}</td>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;