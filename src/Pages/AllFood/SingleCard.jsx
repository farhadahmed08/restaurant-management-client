import { useEffect } from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ foods }) => {
  // const [asc,setAsc] = useState(true);
  // const [search,setSearch] = useState('');

  const { foodName, _id, foodCategory, price, foodImage, quantity } = foods;

  //   useEffect(() => {

  //   fetch(`https://resturant-managment-server.vercel.app/foods?sort=${asc?'asc' : 'des'}&search=${search}`)

  // }, []);

  // const handleSearch = e =>{
  //   e.preventDefault()
  //   const searchText = e.target.search.value;

  //   // console.log(searchText)
  //   setSearch(searchText)
  // }

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300"
          src={foodImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{foodName}</h2>
        <div className="flex">
          <p>{foodCategory}</p>
          <p>stock: <span className="font-bold text-lime-600">{quantity}</span></p>
        </div>
        <p className="text-orange-400 font-bold">{price}$</p>
        <div className="card-actions justify-end">
          <Link to={`/food/${_id}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
