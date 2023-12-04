import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "https://resturant-managment-server.vercel.app",
  // withCredentials: true,
});

const useAxiosSecure = () => {


  const { logOut } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    // axiosSecure.interceptors.response.use(
    //   (res) => {
    //     return res;
    //   },
    //   (error) => {
    //     console.log("error tracked in the interceptor", error.response);
    //     if (error.response.status === 401 || error.response.status === 403) {
    //       console.log("logout the user");
    //       logOut()
    //         .then(() => {
    //           navigate("/login");
    //         })
    //         .catch((error) => console.log(error));
    //     }
    //   }
    // );
  
  // request interceptor to add authorization header for every secure call to the api
  
  
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptors',token)
    // backend er sathe banan mil rekhe authorization likhte hobe
    config.headers.authorization = `Bearer ${token}`;
    return config;
},function (error){
    // Do Something With Request Error 
    return Promise.reject(error);
});

 //interceptors 401 and 403 status
 axiosSecure.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
},  async(error)=> {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const status = error.response.status;
  // console.log('status error in the interceptor',status);
  // for 401 or 403 logout the user and move the user to the login page
  if (status === 401 || status === 403) {
      await logOut()
      navigate('/login')
  }
  return Promise.reject(error);
});
  
  
  
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
