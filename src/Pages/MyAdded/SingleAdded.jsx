import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleAdded = ({ singleAdded }) => {
  const { email, name, image, price,_id } = singleAdded;
  






  return (
    <div>
      <div className="card bg-base-100 shadow-xl m-5">
        <figure>
          <img
            className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            FoodName: <span className="text-orange-600">{name}</span>
          </h2>
          <p>Email: {email}</p>
          <p>
            Price:<span className="text-orange-500">{price}$</span>
          </p>
          <Link to={`/updated/${_id}`}><div className="card-actions justify-end">
            <button className="btn btn-primary">
              <FaEdit /> Edit
            </button>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAdded;
