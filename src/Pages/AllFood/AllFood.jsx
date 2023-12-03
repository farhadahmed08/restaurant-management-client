import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import useFoods from "../../hooks/useFoods";
import Banner from "../../Components/Banner";
import AllFoodBanner from "../../Components/AllFoodBanner";
// import { useLoaderData } from "react-router-dom";

const AllFood = () => {
  const [food] = useFoods();

  // const [allFoods, setAllFoods] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");

  // const allFoods = useFoods(asc, search);

  // const Foods = useLoaderData() ;
  // console.log(Foods)

  // useEffect(()=>{

  // fetch(`http://localhost:5000/services?sort=${asc?'asc' : 'des'}&search=${search}`)
  // .then((res) => res.json())
  //   .then((data) => setSearch(data));

  //         fetch("http://localhost:5000/foods")
  //   .then((res) => res.json())
  //   .then((data) => setAllFoods(data));

  // },[]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    console.log(searchText);
    setSearch(searchText);
  };

  return (
    <div className="mt-6">
      {/* <div className="mb-6 flex items-center justify-center" >
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          </div> */}
      <div>
       <AllFoodBanner/>
      </div>
      <form className="text-center mt-6" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input type="submit" value="search" className="btn btn-ghost " />
      </form>
      {/* <button className="btn btn-secondary m-5" onClick={() => setAsc(!asc)}>
        {asc ? "Price: Low to High" : "Price: High to Low"}
      </button> */}

      <select className="select select-bordered w-full max-w-xs m-10">
        <option disabled defaultValue="Filter By">
          Filter By
        </option>
        <option>Price Low to High</option>
        <option>Price High To Low</option>
      </select>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {food?.map((foods) => (
          <SingleCard key={foods._id} foods={foods}></SingleCard>
        ))}
      </div>
      <div>
      <div className="join flex justify-center items-center m-10">
  <input className="join-item btn " type="radio" name="options" aria-label="1"  />
  <input className="join-item btn " type="radio" name="options" aria-label="2" />
  <input className="join-item btn " type="radio" name="options" aria-label="3" />
  <input className="join-item btn " type="radio" name="options" aria-label="4" />
</div>
      </div>
    </div>
  );
};

export default AllFood;
