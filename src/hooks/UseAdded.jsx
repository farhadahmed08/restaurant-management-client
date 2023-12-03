import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseAdded = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch,data:added=[]} =  useQuery({
        queryKey:['order',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/myAdded?email=${user.email}`);
            return res.data;
        }
    })
    return [added, refetch]

   
};

export default UseAdded;