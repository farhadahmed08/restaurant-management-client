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
import SingleFoodCard from "../Pages/AllFood/SingleFoodCard";
import OrderNow from "../Pages/OrderNow/OrderNow";
import OrderPage from "../Pages/OrderPage/OrderPage";
import AddedFood from "../Pages/AddedFood/AddedFood";
import PrivateRoute from "./PrivateRoute";
import MyOrderList from "../Pages/MyOrderList/MyOrderList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch("/TopFood.json"),
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
          element: <AllFood/>,
          
        },
        {
          path: "/food/:id",
          element: <OrderNow/>,
          loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
          
        },
        {
          path: "/orderedFood/:id",
          element: <PrivateRoute><OrderPage/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
          
        },
        {
          path: "/addedFood",
          element: <PrivateRoute><AddedFood/></PrivateRoute>,
          
          
        },
        {
          path: "/myOrder",
          element: <MyOrderList></MyOrderList>,
          
          
        },
    ]
  

    },
  ]);

  export default router;