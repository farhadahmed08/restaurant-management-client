import { useLoaderData, useParams } from "react-router-dom";


const SingleFoodCard = () => {

   const singleFoodCard = useLoaderData()
   const {_id,foodName,
    foodImage,
    quantity,
    price
    
    
    } = singleFoodCard;
   console.log(foodName)
   const foodId = useParams()
   console.log(foodId)


    return (
        <div>
           <div className="hero min-h-screen bg-blue-200">
  <div className="hero-content flex-col lg:flex-row-reverse border border-red-400">
    <img src={foodImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{foodName}</h1>
      <p className="py-6">Quantity:{quantity}</p>
      <p className="py-6">Price: {price}$</p>
      <div className="space-x-5"><button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Add to Cart</button>
      <button className="btn btn-error">Delete</button></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleFoodCard;