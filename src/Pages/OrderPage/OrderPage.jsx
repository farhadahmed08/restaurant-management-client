import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseOrder from "../../hooks/UseOrder";
import { useEffect, useState } from "react";



const OrderPage = () => {

    const {user} = useAuth();
    const orderFood = useLoaderData();
    const { foodName, foodCategory, price, foodImage, description ,_id,
    
     } = orderFood;
     const axiosSecure = useAxiosSecure();
     const location = useLocation();
    //  const from = location.state?.from?.pathname || "/";
     const [,refetch] = UseOrder();
     const [quantity, setQuantity] = useState(1);
     const [error, setError] = useState(null);
    //  const [totalPrice, setTotalPrice] = useState(price);

    //  useEffect(() => {
    //   const newTotalPrice = price * quantity;
    //   setTotalPrice(newTotalPrice);
    // }, [quantity, price]);

    const totalPrice = price * quantity;

   


     const handleAddToCart =()=>{
      // Check if quantity is provided and is a valid number
  if (!quantity || isNaN(quantity) || quantity <= 0) {
    setError("Please enter a valid quantity.");
    return;
  }
        // console.log(food,user.email);
        if (user && user.email) {
          //  send cart item to the database 
          
          const orderItem = {
            menuId:_id,
            email:user.email,
            name:foodName,
            image:foodImage,
            category:foodCategory,
            quantity:(quantity*1),
            totalPrice
          }
          axiosSecure.post('/orderItems',orderItem)
          .then(res=>{
            console.log(res.data)
            if (res.data.insertedId) {
              setError(null);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${foodName} has been added to the cart`,
                showConfirmButton: false,
                timer: 1500
              });
              //refetch cart to update the cart items count
              refetch();
               // Clear the input field after adding to the cart
                setQuantity("");
            }
          })
          .catch((error) => {
            // Handle error
            if (error.response.status === 400) {
              // Set the error state to display the error message
              setError(error.response.data.error);
              console.log(error.response.data.error)
            } else {
              console.error('Error adding to cart:', error.message);
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

      <input type="text" name="quantity" placeholder="Enter Order Quantity" value={quantity}
  onChange={(e) => setQuantity(e.target.value)} className="input input-bordered w-full"  />
   <p>Total Price: <span className="font-bold text-green-700">${totalPrice}</span></p>
     <div className="card-actions mt-10">
        <button onClick={handleAddToCart} className="btn btn-primary">Order Now</button>
      </div>
      {error && (
            <div className="text-red-600 mt-2">
              <p>{error}</p>
            </div>
          )} 
    </div>
  </div>
      </div>
    );
};

export default OrderPage;