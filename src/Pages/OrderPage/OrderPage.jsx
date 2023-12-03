import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseOrder from "../../hooks/UseOrder";


const OrderPage = () => {

    const {user} = useAuth();
    const orderFood = useLoaderData();
    const { foodName, foodCategory, price, foodImage, description ,_id,
    
     } = orderFood;
     const axiosSecure = useAxiosSecure();
     const location = useLocation();
    //  const from = location.state?.from?.pathname || "/";
     const [,refetch] = UseOrder();


     const handleAddToCart =()=>{
        // console.log(food,user.email);
        if (user && user.email) {
          //  send cart item to the database 
          
          const orderItem = {
            menuId:_id,
            email:user.email,
            name:foodName,
            image:foodImage,
            category:foodCategory,
            quantity:'quantity',
            price
          }
          axiosSecure.post('/orderItems',orderItem)
          .then(res=>{
            console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${foodName} has been added to the cart`,
                showConfirmButton: false,
                timer: 1500
              });
              //refetch cart to update the cart items count
              refetch();
            }
          });

        }
        else{
          Swal.fire({
            title: "You are not logged In?",
            text: "Please login to add to the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
            //TODO: send the user to the login page 
            Navigate('/login',{state:{from:location}})
            }
          });
        }
    }

    return (
        <div className="m-10">
            
        <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure className="flex-1"><img src={foodImage} alt="Album"/></figure>
    <div className=" flex-1 space-y-10 text-center m-4">
      <h2 className="card-title border border-black shadow-xl">FoodName: <span className="font-serif text-orange-500"> {foodName}</span></h2>
      <p className="border border-black">Origin: <span className="font-bold">{foodCategory}</span></p>
      <p className="border border-black"> <span className="font-mono">{description}</span> </p>
      <p className="border border-black"> <span className="text-orange-600 font-bold">{user?.email}</span> </p>
      <p className="border border-black">Price: <span className="font-bold text-blue-700">{user?.displayName}</span> $</p>
      <p className="border border-black">Price: <span className="font-bold text-blue-700">{price}</span> $</p>

      <input type="text" name="quantity" placeholder="Enter Order Quantity"  className="input input-bordered w-full"  />
  
     <div className="card-actions mt-10">
        <button onClick={handleAddToCart} className="btn btn-primary">Order Now</button>
      </div>
    </div>
  </div>
      </div>
    );
};

export default OrderPage;