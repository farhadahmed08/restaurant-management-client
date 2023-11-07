import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from './../Pages/Home/Home';
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import AllFood from "../Pages/AllFood/AllFood";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/allFood",
          element: <AllFood/>
        },
    ]
  

    },
  ]);

  export default router;