import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const useFoods = () => {

  const axiosPublic = UseAxiosPublic();


  const {data:food=[],isPending:loading,refetch} = useQuery({
    queryKey:['food'],
    queryFn:async()=>{
        const res = await axiosPublic.get('/foods');
        return res.data;
    }
})



    // const [allFoods, setAllFoods] = useState([]);
    // useEffect(() => {
    //     // fetch("http://localhost:5000/services")
    //     //   .then((res) => res.json())
    //     //   .then((data) => setServices(data));

    //     axiosSecure(`/foods?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
    //     .then(res=>setAllFoods(res.data))



    //   }, [asc,search]);

    //   return allFoods;
    return [food, loading,refetch]



};

export default useFoods;