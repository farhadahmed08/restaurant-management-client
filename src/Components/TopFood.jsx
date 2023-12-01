import { Link } from "react-router-dom";


const TopFood = ({topFood}) => {

    const {foodName,id,foodCategory,price,foodImage} =topFood




    return (
        <div>
       <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300" src={foodImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{foodName}</h2>
    <p >{foodCategory}</p>
    <p className="text-orange-400 font-bold">{price}$</p>
    <div className="card-actions justify-end">
     <Link to={`/toFood/${id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
    
  </div>
  
</div>

    </div>
    );
};

export default TopFood;