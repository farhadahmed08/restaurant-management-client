import { Link, useLoaderData } from "react-router-dom";

const OrderNow = () => {
  const orderFood = useLoaderData();
  const { foodName, foodCategory, price, foodImage, quantity,description ,
    foodOrigin
     } = orderFood;

  return (
    <div className="m-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="flex-1"><img src={foodImage} alt="Album"/></figure>
  <div className="card-body flex-1">
    <h2 className="card-title">FoodName: <span className="font-serif text-orange-500"> {foodName}</span></h2>
    <p>Origin: <span className="font-bold">{foodCategory}</span></p>
    <p> <span className="font-mono">{description}</span> </p>
    <p>FoodOrigin: <span className="text-orange-600 font-bold">{foodOrigin}</span> </p>
    <p>Price: <span className="font-bold text-blue-700">{price}</span> $</p>

    <Link to="/myOrderedFood"><div className="card-actions ">
      <button className="btn btn-primary">Order Now</button>
    </div></Link>
  </div>
</div>
    </div>
  );
};

export default OrderNow;
