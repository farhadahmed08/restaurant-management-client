import { useEffect } from "react";
import { Link } from "react-router-dom";


const SingleCard = ({foods}) => {

  // const [asc,setAsc] = useState(true);
  // const [search,setSearch] = useState('');

    const {foodName,_id,foodCategory,price,foodImage} =foods;


  //   useEffect(() => {
  
  //   fetch(`http://localhost:5000/foods?sort=${asc?'asc' : 'des'}&search=${search}`) 
  
  
   
  // }, []);

  // const handleSearch = e =>{
  //   e.preventDefault()
  //   const searchText = e.target.search.value;
    
  //   // console.log(searchText)
  //   setSearch(searchText)
  // }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
<figure><img className="h-full" src={foodImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>{foodCategory}</p>
    <p>{price}</p>
    
    <div className="card-actions justify-end">
      <Link to={`/food/${_id}`}><button className="btn btn-primary">see Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleCard;