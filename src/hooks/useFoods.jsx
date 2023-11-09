import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";



const useFoods = (asc,search) => {
    const [allFoods, setAllFoods] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:5000/services")
        //   .then((res) => res.json())
        //   .then((data) => setServices(data));

        axiosSecure(`/foods?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res=>setAllFoods(res.data))



      }, [asc,search]);

      return allFoods;



};

export default useFoods;