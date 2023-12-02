import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseOrder = () => {


    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch,data:order=[]} =  useQuery({
        queryKey:['order',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/orderItems?email=${user.email}`);
            return res.data;
        }
    })
    return [order, refetch]

   
};

export default UseOrder;